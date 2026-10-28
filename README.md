<<<<<<< HEAD
# Deluxe Solution — Professional Business Website & Repair Management System

> Production-ready website and repair management platform for **Deluxe Solution**, a computer, laptop, CCTV surveillance, printer, and currency counting machine technical service center located on **Sinhgad Road, Pune, Maharashtra, India**.

---

## 1. Project Overview & Verified Business Information

* **Business Name:** Deluxe Solution
* **Workshop Address:** Shop No. 6, Sr. No. 18/3/1, Vithal Heights, Lane No. 4, Opposite Santosh Hall, Vadgaon Budruk / Hingane Khurd, Sinhgad Road, Pune, Maharashtra - 411051
* **Primary Phone:** `+91 98900 17975` (Click-to-call enabled)
* **WhatsApp Support:** `+91 98900 17975` (Prefilled enquiry message)
* **Email:** `delux.solution@gmail.com`
* **Operating Hours:** Monday to Sunday (All 7 Days) — `10:00 AM to 7:00 PM`
* **Google Maps Directions:** [Open in Google Maps](https://maps.google.com/?q=Deluxe+Solution+Sinhgad+Road+Pune+411051)

---

## 2. Technology Stack

* **Frontend:** React 18 with Vite
* **Styling:** Tailwind CSS (Custom palette: Deep Navy `#14213D`, Royal Blue `#2563EB`, Warm Amber `#F5B82E`, Surface `#FFFFFF`, Canvas `#F8FAFC`)
* **Icons:** Lucide React
* **Routing:** React Router v6
* **Form Handling:** React Hook Form with client-side regex validations & spam bot honeypot protection
* **Animations:** Framer Motion (subtle, non-distracting)
* **Backend:** Node.js & Express.js (REST API, Helmet security, CORS, JWT authentication, Morgan logger)
* **Database / Storage:** Dual-mode persistence:
  * **Built-in Zero-Config File Storage:** Automatic persistent JSON store (`server/data/enquiries.json`) ready out-of-the-box.
  * **MySQL Database:** Fully supported via `server/schema.sql` and `mysql2` connection pool when `.env` credentials are provided.
* **SEO & Accessibility:** Open Graph metadata, semantic HTML5, LocalBusiness JSON-LD schema, `sitemap.xml`, and `robots.txt`.

---

## 3. Project Directory Structure

```text
deluxe_solution/
├── client/                     # Frontend Application (React + Vite + Tailwind)
│   ├── public/
│   │   ├── images/             # Genuine business equipment photography
│   │   │   ├── brother-printer.png
│   │   │   ├── cctv-setup.png
│   │   │   ├── currency-mix-counter.png
│   │   │   ├── desktop-pc.png
│   │   │   └── note-counter-standard.png
│   │   ├── favicon.svg         # Deluxe Solution branded SVG icon
│   │   ├── .htaccess           # Apache rewrite rules for cPanel routing
│   │   ├── robots.txt          # SEO crawler rules
│   │   └── sitemap.xml         # XML Sitemap
│   ├── src/
│   │   ├── constants/
│   │   │   └── businessInfo.js # Central verified business information & live open/closed logic
│   │   ├── services/
│   │   │   └── api.js          # Axios API client & error-resilient methods
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx  # Responsive navigation with live store open badge
│   │   │   │   ├── Footer.jsx  # Complete business footer with quick links & map
│   │   │   │   └── FloatingActions.jsx # WhatsApp pre-filled button & mobile quick call bar
│   │   │   └── home/
│   │   │       └── DiagnosticTroubleshooter.jsx # Interactive symptom & fault selector
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Premium split hero, service cards, why choose us, 4-step process
│   │   │   ├── ServicesPage.jsx# Deep dive into all repair categories with bench diagnostics
│   │   │   ├── AboutPage.jsx   # Business ethos, workshop standards & data privacy
│   │   │   ├── WhyUsPage.jsx   # Honest comparison table & common FAQs
│   │   │   ├── ContactPage.jsx # Validated repair enquiry form & Google Maps embed
│   │   │   ├── AdminLoginPage.jsx    # Secure technician / staff login
│   │   │   ├── AdminDashboardPage.jsx# Enquiry tracking, status updates, notes & search
│   │   │   ├── PrivacyPolicyPage.jsx # Customer device data confidentiality terms
│   │   │   └── NotFoundPage.jsx      # Clean 404 page
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                     # Backend Application (Node.js + Express)
│   ├── data/                   # Auto-generated persistent storage (out-of-the-box)
│   ├── src/
│   │   ├── middleware/
│   │   │   └── auth.js         # JWT verification middleware
│   │   ├── routes/
│   │   │   ├── authRoutes.js   # Admin login endpoint
│   │   │   └── enquiryRoutes.js# Public submission & protected enquiry management
│   │   ├── db.js               # Dual MySQL & JSON persistence engine
│   │   └── index.js            # Express server entry point & static file hosting
│   ├── schema.sql              # MySQL DDL script with indexes for cPanel/phpMyAdmin
│   ├── test-api.js             # Automated API integration tests
│   ├── .env.example
│   └── package.json
│
├── package.json                # Root convenience scripts
└── README.md
```

---

## 4. Quick Start & Local Development

### Prerequisites
* Node.js v18+ (tested on Node.js v24)
* npm v9+

### 1. Installation
Install dependencies for both frontend and backend:
```bash
# Option A: From root directory
npm run install:all

# Option B: Manually in each folder
cd client && npm install
cd ../server && npm install
```

### 2. Configure Environment Variables
Inside the `server/` directory:
```bash
cp server/.env.example server/.env
```
Default credentials in `.env`:
* **Admin Username:** `admin`
* **Admin Password:** `admin123`
* **Server Port:** `5000`

### 3. Run in Development Mode
In two terminal windows:
```bash
# Terminal 1: Start Backend API (Port 5000)
npm run dev:server

# Terminal 2: Start Frontend with Vite (Port 5173)
npm run dev:client
```
Visit `http://localhost:5173` to explore the website.

---

## 5. Production Build & Deployment

### Building Frontend
```bash
npm run build:client
```
The optimized static bundle will be generated inside `client/dist/`.

### Running Production Full-Stack Server
The Express backend is configured to automatically serve the production frontend from `client/dist`:
```bash
npm start
```
The full application will run on `http://localhost:5000`.

---

## 6. cPanel Shared Hosting Deployment Guide

### Option 1: Standard cPanel (Static Frontend + Node.js App)
1. **Frontend Deployment:**
   * Build the client (`npm run build:client`).
   * Upload all files from `client/dist/` into your cPanel `public_html/` directory.
   * Ensure `.htaccess` is uploaded into `public_html/` (this ensures React Router URL rewrites work when refreshing pages).
2. **Backend Deployment (via "Setup Node.js App" in cPanel):**
   * In cPanel, click **Setup Node.js App**.
   * Create a new application:
     * Node.js version: **18.x** or higher.
     * Application root: `deluxe_api`
     * Application URL: `api` (e.g. `yourdomain.com/api`)
     * Application startup file: `src/index.js`
   * Upload the `server/` files into `/home/username/deluxe_api/`.
   * Click **Run NPM Install** in cPanel.
   * Add environment variables (`JWT_SECRET`, `ADMIN_PASSWORD`, etc.) in the cPanel Node.js interface.

### Option 2: MySQL Database Setup via phpMyAdmin
1. In cPanel, navigate to **MySQL Databases**.
2. Create a database: `deluxe_solution_db`.
3. Create a user and grant full permissions to the database.
4. Open **phpMyAdmin**, select the newly created database, and click **Import**.
5. Choose `server/schema.sql` and run the import.
6. In `server/.env`, configure:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=your_cpanel_db_user
   DB_PASSWORD=your_cpanel_db_password
   DB_NAME=your_cpanel_db_name
   ```
   *Note: If MySQL credentials are not provided, the backend continues to function reliably using its built-in persistent storage!*

---

## 7. Admin Dashboard & Enquiry Management

* **Admin Portal URL:** `/admin/login` (Accessible via link in the website footer)
* **Default Username:** `admin`
* **Default Password:** `admin123`
* **Capabilities:**
  * View enquiry counts (Total, New, In Progress, Quotation Sent, Completed).
  * Real-time search by customer name, phone, or Tracking Reference ID (e.g. `DS-7821`).
  * Filter by service category and workflow status:
    * `New`
    * `Contacted`
    * `Diagnosis Pending`
    * `Quotation Sent`
    * `Approved`
    * `In Progress`
    * `Completed`
    * `Cancelled`
  * Add internal technician diagnosis notes and follow-up dates.
  * Direct one-click **Call Customer** and **WhatsApp Customer** action buttons.
  * Delete completed or cancelled records.

---

## 8. Business Confirmation Checklist

The website has been built using authentic verified information from Deluxe Solution's Sinhgad Road location. The following items should be confirmed with the business owner when going live:
1. **WhatsApp Number:** Currently configured to `+91 98900 17975`. Please verify if this mobile number is the business's official WhatsApp Business account.
2. **Holiday / Sunday Hours:** Shop hours are configured as 10:00 AM – 7:00 PM (Monday to Sunday). Please confirm if Sunday operations have restricted hours or if advance booking is required.
3. **Admin Password:** Remember to change `ADMIN_PASSWORD` in `server/.env` before deploying to public hosting.
4. **Custom Domain:** When linking to the final production domain (e.g. `deluxe-solution.com`), update `og:url` and `sitemap.xml` accordingly.
=======
# demo-website
demo Website 
>>>>>>> c69c30bad334569a817ca59aae4e29d31bbe061b
