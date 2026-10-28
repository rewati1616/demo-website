import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

import enquiryRoutes from './routes/enquiryRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { db } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security and utility middleware
app.use(helmet({
  contentSecurityPolicy: false, // Allow local assets and fonts
}));
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/enquiries', enquiryRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Deluxe Solution API',
    database: db.isMySQL() ? 'MySQL' : 'Persistent File Store (Ready)',
  });
});

// Serve frontend build if present (for single-server production deployment)
const distPath = path.join(__dirname, '../../client/dist');
app.use(express.static(distPath));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('Deluxe Solution API is running. Frontend build pending.');
    }
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`===============================================`);
  console.log(`  Deluxe Solution Backend API`);
  console.log(`  Running on: http://localhost:${PORT}`);
  console.log(`  Storage Mode: ${db.isMySQL() ? 'MySQL Database' : 'Persistent File Store'}`);
  console.log(`===============================================`);
});

export default app;
