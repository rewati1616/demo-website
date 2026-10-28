import express from 'express';
import { db } from '../db.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Phone validation regex (Indian 10-digit or standard international format)
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{8,15}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Allowed statuses
const VALID_STATUSES = [
  'New',
  'Contacted',
  'Diagnosis Pending',
  'Quotation Sent',
  'Approved',
  'In Progress',
  'Completed',
  'Cancelled',
];

// PUBLIC: Submit repair enquiry
router.post('/', async (req, res) => {
  try {
    const {
      customer_name,
      phone,
      email,
      service_category,
      device_type,
      brand_model,
      problem_description,
      preferred_contact,
      preferred_date,
    } = req.body;

    // Field Validations
    if (!customer_name || customer_name.trim().length < 2) {
      return res.status(400).json({ success: false, message: 'Please provide a valid full name.' });
    }

    if (!phone || !PHONE_REGEX.test(phone.trim())) {
      return res.status(400).json({ success: false, message: 'Please provide a valid phone number (e.g., +91 98900 17975).' });
    }

    if (!email || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }

    if (!service_category) {
      return res.status(400).json({ success: false, message: 'Please select a service category.' });
    }

    if (!device_type) {
      return res.status(400).json({ success: false, message: 'Please specify the device or machine type.' });
    }

    if (!problem_description || problem_description.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Please describe the problem in at least 10 characters so our technicians can prepare the right diagnostic tools.',
      });
    }

    const created = await db.createEnquiry({
      customer_name,
      phone,
      email,
      service_category,
      device_type,
      brand_model: brand_model || '',
      problem_description,
      preferred_contact: preferred_contact || 'Phone',
      preferred_date: preferred_date || null,
    });

    return res.status(201).json({
      success: true,
      message: 'Repair enquiry received successfully! Our technician will reach out shortly.',
      enquiry: {
        reference_id: created.reference_id,
        customer_name: created.customer_name,
        service_category: created.service_category,
        device_type: created.device_type,
        created_at: created.created_at,
      },
    });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Server encountered an issue saving your enquiry. Please call us directly at +91 98900 17975.',
    });
  }
});

// ADMIN: Get all enquiries with filtering & search
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const { search, status, category } = req.query;
    const enquiries = await db.getAllEnquiries({ search, status, category });

    // Calculate quick counts for dashboard
    const all = await db.getAllEnquiries();
    const stats = {
      total: all.length,
      new: all.filter((e) => e.status === 'New').length,
      inProgress: all.filter((e) => ['Diagnosis Pending', 'Approved', 'In Progress'].includes(e.status)).length,
      completed: all.filter((e) => e.status === 'Completed').length,
      quotationSent: all.filter((e) => e.status === 'Quotation Sent').length,
    };

    return res.json({
      success: true,
      stats,
      data: enquiries,
    });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return res.status(500).json({ success: false, message: 'Failed to retrieve enquiries.' });
  }
});

// ADMIN: Update status
router.patch('/:id/status', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!VALID_STATUSES.includes(status)) {
      return res.status(400).json({ success: false, message: `Invalid status. Allowed: ${VALID_STATUSES.join(', ')}` });
    }

    const updated = await db.updateStatus(id, status);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    }

    return res.json({
      success: true,
      message: `Status updated to ${status}`,
      enquiry: updated,
    });
  } catch (error) {
    console.error('Error updating status:', error);
    return res.status(500).json({ success: false, message: 'Failed to update status.' });
  }
});

// ADMIN: Add/Update internal notes and follow-up date
router.post('/:id/notes', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { notes, follow_up_date } = req.body;

    const updated = await db.addNote(id, { notes, follow_up_date });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    }

    return res.json({
      success: true,
      message: 'Technician notes updated.',
      enquiry: updated,
    });
  } catch (error) {
    console.error('Error saving notes:', error);
    return res.status(500).json({ success: false, message: 'Failed to save notes.' });
  }
});

// ADMIN: Delete enquiry
router.delete('/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await db.deleteEnquiry(id);
    return res.json({ success: true, message: 'Enquiry removed successfully.' });
  } catch (error) {
    console.error('Error deleting enquiry:', error);
    return res.status(500).json({ success: false, message: 'Failed to delete enquiry.' });
  }
});

export default router;
