# KNS Practice Portal - Legal Practice Management System

KNS Practice Portal is a modern, enterprise-grade SaaS web application built for **KNS Law Firm**. Tailored specifically for legal professionals, it combines client management (CRM), dispute case dockets, AI-powered document drafting, secure video consultations, billing ledgers, and administration tools into one cohesive, luxury-minimalist workspace.

The application styling is modeled after premium platforms like Stripe, Linear, Notion, and Clio, presenting a clean white workspace canvas, dark navy sidebar, and cobalt blue accents.

---

## Key Modules & Features

- **Unified Authentication Shell**: Sliding panels supporting logins, forgot password triggers, 2FA passcode overlays, and a dynamic **Security Role Selection Bypass** (Admin, Senior Partner, Junior Associate, Receptionist, Accountant, Client).
- **Dynamic Role-Based Dashboards**: Real-time stats recalculation, sparkline SVGs, AI deadline warning notices, and active court calendar listings tailored to the logged-in user role.
- **Client CRM (KYC Intake)**: Directory tracking client metadata (Aadhaar, PAN, GST, Address). Includes document uploads with simulated AI verification checks.
- **Case Registry & Milestones**: Case tracking across litigation statuses (Open, Drafting, Review, Filed, Closed) with visual vertical milestone charts.
- **Teams Video consultation**: Zoom/Teams-style video layouts equipped with microphone/camera controls, real-time sketching whiteboard, screen share mockups, live E-Signature requests, and AI consultation summary memo builders.
- **Document Vault & OCR**: File manager with local browser file-locking states and an **OCR Scanning Assistant** that converts document PDFs into editable text boxes side-by-side.
- **AI Drafting Assistant**: Split ChatGPT-like layout linking case timelines, prompt buttons (Draft Plaint, Check Limitation, Suggest Relief), a rich formatting document editor with PDF/Word export links, and a side-by-side red/green version comparison report.
- **Legal Research Engine**: AI indexing system to search judgments, acts, and high court citations (e.g. Negotiable Instruments Act Section 138).
- **Workflow Kanban Board**: Task planner with priority badges (Urgent, High, Medium, Low) and quick progress-shifting triggers.
- **Billing & GST Ledger**: Financial panel compiling GST (18%) taxation, publishing invoices, and rendering printable computer-authorized receipts.
- **Immutable Audit Trail**: Chronological read-only event logger registering system transactions, downloads, and logins (deletion is blocked for security).

---

## File Structure

The project is structured as a zero-dependency static application:

- [`index.html`](index.html) - Main HTML structure, view wrappers, modals, search consoles, and UI components.
- [`style.css`](style.css) - Global CSS design tokens, HSL variables, responsive utilities, layouts, and dark mode theme.
- [`app.js`](app.js) - App logic driving SPA routing, mock database state, interactive canvas drawing, and prompt response generation.

---

## Setup & Running Locally

Since this is a client-side application, there are no dependencies to install. You can launch it instantly:

### Method 1: Direct File Launch
1. Clone or download this repository.
2. Double-click the `index.html` file to open it directly in Google Chrome, Firefox, Safari, or Microsoft Edge.

### Method 2: Python Local Server
To run in a server environment locally, open your terminal/command prompt and run:
```bash
python -m http.server 8000
```
Then navigate to [http://localhost:8000](http://localhost:8000) in your web browser.

---

## License

This portal is proprietary to KNS Law Firm and configured under attorney-client privilege guidelines.
