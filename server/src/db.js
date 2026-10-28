import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2/promise';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../data');
const DATA_FILE = path.join(DATA_DIR, 'enquiries.json');

// Ensure data folder exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initial seed data if file doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  const initialEnquiries = [
    {
      id: "ds-1001",
      reference_id: "DS-7821",
      customer_name: "Rahul Deshmukh",
      phone: "+91 98220 45678",
      email: "rahul.deshmukh@example.com",
      service_category: "Computer & Laptop Repair",
      device_type: "Laptop",
      brand_model: "Dell Inspiron 15 3501",
      problem_description: "Laptop screen flickering intermittently and boot time has become very slow after Windows update.",
      preferred_contact: "Phone",
      preferred_date: "2026-10-30",
      status: "In Progress",
      notes: "Diagnosed HDD bad sectors and loose display LVDS cable. Customer approved NVMe SSD upgrade and cable servicing.",
      follow_up_date: "2026-10-31",
      created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: "ds-1002",
      reference_id: "DS-7822",
      customer_name: "Sunil Patil (Shop Owner)",
      phone: "+91 94230 11223",
      email: "sunil.patil.grocers@example.com",
      service_category: "Currency Counting Machine Service",
      device_type: "Mix Note Counter",
      brand_model: "Kavinstar Mix Note Master",
      problem_description: "Machine halts with error E03 when feeding Rs. 500 notes. Needs sensor cleaning and calibration.",
      preferred_contact: "WhatsApp",
      preferred_date: "2026-10-29",
      status: "New",
      notes: "Customer requested urgent service before weekend retail rush.",
      follow_up_date: "2026-10-29",
      created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: "ds-1003",
      reference_id: "DS-7823",
      customer_name: "Anand Joshi (Society Secretary)",
      phone: "+91 98505 88990",
      email: "vithal.heights.soc@example.com",
      service_category: "CCTV Camera & Security Repair",
      device_type: "CCTV System (8 Channels)",
      brand_model: "Hikvision DS-7208HGHI",
      problem_description: "Camera 3 and Camera 7 show black screen. DVR HDD beeps continuously.",
      preferred_contact: "Phone",
      preferred_date: "2026-10-31",
      status: "Diagnosis Pending",
      notes: "Possible 12V power supply drop or BNC cable cut along parking duct.",
      follow_up_date: "2026-10-30",
      created_at: new Date(Date.now() - 3600000 * 18).toISOString(),
      updated_at: new Date().toISOString()
    }
  ];
  fs.writeFileSync(DATA_FILE, JSON.stringify(initialEnquiries, null, 2), 'utf-8');
}

// MySQL pool setup if credentials are provided
let pool = null;
let useMySQL = false;

if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_NAME) {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT) || 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    useMySQL = true;
    console.log('[DB] Configured MySQL connection pool');
  } catch (err) {
    console.warn('[DB] MySQL init failed, falling back to JSON storage:', err.message);
    useMySQL = false;
  }
}

// File storage helpers
const readJsonFile = () => {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading JSON store:', err);
    return [];
  }
};

const writeJsonFile = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing JSON store:', err);
    return false;
  }
};

export const db = {
  isMySQL() {
    return useMySQL;
  },

  async getAllEnquiries({ search, status, category } = {}) {
    if (useMySQL && pool) {
      try {
        let query = 'SELECT * FROM enquiries WHERE 1=1';
        const params = [];
        if (status && status !== 'all') {
          query += ' AND status = ?';
          params.push(status);
        }
        if (category && category !== 'all') {
          query += ' AND service_category = ?';
          params.push(category);
        }
        if (search) {
          query += ' AND (customer_name LIKE ? OR phone LIKE ? OR reference_id LIKE ?)';
          const term = `%${search}%`;
          params.push(term, term, term);
        }
        query += ' ORDER BY created_at DESC';
        const [rows] = await pool.query(query, params);
        return rows;
      } catch (e) {
        console.warn('MySQL query failed, falling back to file DB:', e.message);
      }
    }

    // JSON file store
    let records = readJsonFile();
    if (status && status !== 'all') {
      records = records.filter((r) => r.status.toLowerCase() === status.toLowerCase());
    }
    if (category && category !== 'all') {
      records = records.filter((r) => r.service_category === category);
    }
    if (search) {
      const q = search.toLowerCase();
      records = records.filter(
        (r) =>
          r.customer_name?.toLowerCase().includes(q) ||
          r.phone?.toLowerCase().includes(q) ||
          r.reference_id?.toLowerCase().includes(q)
      );
    }
    return records.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },

  async createEnquiry(enquiry) {
    const newRecord = {
      id: `ds-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      reference_id: `DS-${Math.floor(1000 + Math.random() * 9000)}`,
      customer_name: enquiry.customer_name.trim(),
      phone: enquiry.phone.trim(),
      email: enquiry.email.trim(),
      service_category: enquiry.service_category,
      device_type: enquiry.device_type,
      brand_model: enquiry.brand_model || '',
      problem_description: enquiry.problem_description.trim(),
      preferred_contact: enquiry.preferred_contact || 'Phone',
      preferred_date: enquiry.preferred_date || null,
      status: 'New',
      notes: '',
      follow_up_date: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    if (useMySQL && pool) {
      try {
        const query = `
          INSERT INTO enquiries 
          (id, reference_id, customer_name, phone, email, service_category, device_type, brand_model, problem_description, preferred_contact, preferred_date, status, notes, follow_up_date, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        await pool.query(query, [
          newRecord.id,
          newRecord.reference_id,
          newRecord.customer_name,
          newRecord.phone,
          newRecord.email,
          newRecord.service_category,
          newRecord.device_type,
          newRecord.brand_model,
          newRecord.problem_description,
          newRecord.preferred_contact,
          newRecord.preferred_date,
          newRecord.status,
          newRecord.notes,
          newRecord.follow_up_date,
          new Date(),
          new Date(),
        ]);
        return newRecord;
      } catch (err) {
        console.warn('MySQL insert failed, saving to file DB instead:', err.message);
      }
    }

    const records = readJsonFile();
    records.unshift(newRecord);
    writeJsonFile(records);
    return newRecord;
  },

  async updateStatus(id, newStatus) {
    if (useMySQL && pool) {
      try {
        await pool.query('UPDATE enquiries SET status = ?, updated_at = NOW() WHERE id = ?', [newStatus, id]);
        return true;
      } catch (e) {
        console.warn('MySQL update failed, writing to file DB:', e.message);
      }
    }

    const records = readJsonFile();
    const index = records.findIndex((r) => r.id === id || r.reference_id === id);
    if (index === -1) return false;
    records[index].status = newStatus;
    records[index].updated_at = new Date().toISOString();
    writeJsonFile(records);
    return records[index];
  },

  async addNote(id, { notes, follow_up_date }) {
    if (useMySQL && pool) {
      try {
        await pool.query('UPDATE enquiries SET notes = ?, follow_up_date = ?, updated_at = NOW() WHERE id = ?', [
          notes,
          follow_up_date || null,
          id,
        ]);
        return true;
      } catch (e) {
        console.warn('MySQL update failed, writing to file DB:', e.message);
      }
    }

    const records = readJsonFile();
    const index = records.findIndex((r) => r.id === id || r.reference_id === id);
    if (index === -1) return false;
    if (notes !== undefined) records[index].notes = notes;
    if (follow_up_date !== undefined) records[index].follow_up_date = follow_up_date;
    records[index].updated_at = new Date().toISOString();
    writeJsonFile(records);
    return records[index];
  },

  async deleteEnquiry(id) {
    if (useMySQL && pool) {
      try {
        await pool.query('DELETE FROM enquiries WHERE id = ?', [id]);
        return true;
      } catch (e) {
        console.warn('MySQL delete failed, deleting from file DB:', e.message);
      }
    }

    const records = readJsonFile();
    const filtered = records.filter((r) => r.id !== id && r.reference_id !== id);
    writeJsonFile(filtered);
    return true;
  },
};
