import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../middleware/auth.js';

const router = express.Router();

const ADMIN_USER = process.env.ADMIN_USERNAME || 'admin';
// Default bcrypt hash for password "admin123"
// $2a$10$wNq.75N.oH5ZzB6J5BfxUeVgS9zS13Tz6m5n9m8x4w3y2z1a0b
const DEFAULT_HASH = '$2a$10$Y1d1C.8YyI3Ncf49Zc9MguR7rP2f7zWqM7N8bW.x6P0.O1n8J8b8m'; // "admin123"

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Please provide both username and password.' });
    }

    const envUser = process.env.ADMIN_USERNAME || 'admin';
    const envPass = process.env.ADMIN_PASSWORD || 'admin123';

    // Allow match if username matches
    if (username.trim().toLowerCase() !== envUser.toLowerCase()) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    // Check direct password or bcrypt hash
    const isDirectMatch = password === envPass;
    const isBcryptMatch = await bcrypt.compare(password, DEFAULT_HASH).catch(() => false);

    if (!isDirectMatch && !isBcryptMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    // Generate JWT
    const token = jwt.sign(
      { username: envUser, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      success: true,
      message: 'Authentication successful',
      token,
      user: {
        username: envUser,
        name: 'Deluxe Solution Administrator',
        role: 'admin',
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error during login.' });
  }
});

export default router;
