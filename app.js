// ==========================================================================
// KNS PRACTICE PORTAL - STATE DATABASE & ENGINE
// ==========================================================================

// Mock State Database
let state = {
    currentUser: {
        username: "admin@knslaw.com",
        name: "Adv. Harish Salve",
        role: "admin", // admin, lawyer, junior_lawyer, receptionist, accountant, client
        avatar: "HS"
    },
    clients: [
        { id: "c1", name: "Tata Sons Private Ltd.", type: "Corporate", email: "legal@tata.com", phone: "+91 22 6665 8282", pan: "AAACT1234T", aadhaar: "9876 5432 1098", gst: "27AAACT1234T1Z0", address: "Bombay House, Homi Mody Street, Mumbai", verified: "Approved", created: "2026-04-12" },
        { id: "c2", name: "Reliance Retail Venture", type: "Corporate", email: "compliance@ril.com", phone: "+91 22 2278 5000", pan: "AAACR5678R", aadhaar: "8765 4321 0987", gst: "27AAACR5678R1Z1", address: "Maker Chambers IV, Nariman Point, Mumbai", verified: "Pending", created: "2026-06-18" },
        { id: "c3", name: "Infosys Technologies", type: "Corporate", email: "ip.legal@infosys.com", phone: "+91 80 2852 0261", pan: "AAACI9911I", aadhaar: "7654 3210 9876", gst: "29AAACI9911I1Z2", address: "Electronics City, Hosur Road, Bengaluru", verified: "Approved", created: "2026-05-30" },
        { id: "c4", name: "Ramesh Kumar (Litigant)", type: "Individual", email: "ramesh.k@gmail.com", phone: "+91 98200 12345", pan: "BPRPK5612K", aadhaar: "6543 2109 8765", gst: "N/A", address: "Flat 402, Sea Breeze Apts, Bandra, Mumbai", verified: "Approved", created: "2026-07-01" }
    ],
    cases: [
        { 
            id: "SLP-4920", 
            clientId: "c1", 
            title: "Tata Sons vs. Competition Commission of India (CCI)", 
            court: "Supreme Court of India (Hall 4)", 
            lead: "Adv. Harish Salve", 
            team: "Adv. Pallavi Shroff, Adv. Rahul Bajaj", 
            date: "2026-07-21", 
            status: "Open", 
            milestones: [
                { title: "Special Leave Petition Filed", date: "2026-03-10", desc: "Petition filed with Supreme Court Registry." },
                { title: "CCI Notice Issued", date: "2026-04-15", desc: "Notice served on Competition Commission response." },
                { title: "Rejoinder Filing Target", date: "2026-07-21", desc: "Draft rejoinder brief under senior review." }
            ]
        },
        { 
            id: "ARB-8891", 
            clientId: "c2", 
            title: "Reliance Retail vs. Shapoorji Pallonji (Contractual Arbitration)", 
            court: "High Court of Bombay (Chamber 12)", 
            lead: "Adv. Abhishek Singhvi", 
            team: "Adv. Devashish Bharuka", 
            date: "2026-08-05", 
            status: "Drafting", 
            milestones: [
                { title: "Notice of Arbitration Served", date: "2026-05-12", desc: "Initial breach statement sent." },
                { title: "Arbitrator Panel Configured", date: "2026-06-20", desc: "Panel judges mutually approved." }
            ]
        },
        { 
            id: "PAT-3321", 
            clientId: "c3", 
            title: "Infosys Software Patent Infringement Action", 
            court: "Delhi High Court (Patent Division)", 
            lead: "Adv. Pallavi Shroff", 
            team: "Adv. Karan Singh", 
            date: "2026-09-12", 
            status: "Review", 
            milestones: [
                { title: "Ad-Interim injunction filed", date: "2026-06-01", desc: "Urgent injunction motion submitted." }
            ]
        }
    ],
    consultations: [
        { id: "con-1", clientName: "Tata Sons Private Ltd.", lawyer: "Adv. Harish Salve", date: "2026-07-20", time: "10:30", type: "Video Conference", fee: 15000, status: "Upcoming" },
        { id: "con-2", clientName: "Reliance Retail Venture", lawyer: "Adv. Abhishek Singhvi", date: "2026-07-20", time: "14:00", type: "Video Conference", fee: 20000, status: "Upcoming" },
        { id: "con-3", clientName: "Infosys Technologies", lawyer: "Adv. Pallavi Shroff", date: "2026-07-22", time: "16:30", type: "Video Conference", fee: 15000, status: "Upcoming" },
        { id: "con-4", clientName: "Ramesh Kumar (Litigant)", lawyer: "Adv. Rahul Bajaj", date: "2026-07-15", time: "11:00", type: "In-Person chamber", fee: 8000, status: "Completed" }
    ],
    documents: [
        { id: "d-1", name: "Supreme_Court_Rejoinder_Draft_v1.pdf", folder: "Contracts", size: "4.2 MB", tags: ["Privileged", "Draft"], date: "2026-07-10", locked: false },
        { id: "d-2", name: "CCI_Adjournment_Notice_June.pdf", folder: "Court Orders", size: "1.8 MB", tags: ["Sealed"], date: "2026-06-15", locked: true },
        { id: "d-3", name: "Infosys_AntiTrust_Assessment_Memo.docx", folder: "Evidence", size: "2.4 MB", tags: ["Confidential"], date: "2026-07-02", locked: false },
        { id: "d-4", name: "Reliance_Retainer_Receipt_FY26.pdf", folder: "Invoices", size: "850 KB", tags: ["Financial"], date: "2026-05-10", locked: false }
    ],
    tasks: [
        { id: "t-1", title: "Verify Tata Sons PAN Card", desc: "Check if the newly uploaded PAN matches tax ID files.", priority: "High", date: "2026-07-21", status: "todo" },
        { id: "t-2", title: "Draft Rejoinder CCI Appeal", desc: "Draft final responses to CCI antitrust claims for Harish Salve review.", priority: "Urgent", date: "2026-07-20", status: "inprogress" },
        { id: "t-3", title: "Reliance Retainer Signoff", desc: "Obtain client E-Signature on retainer arrangement document.", priority: "Medium", date: "2026-07-22", status: "review" },
        { id: "t-4", title: "Setup Infosys Consultation Calendar", desc: "Coordinate patent chamber calendar links for lead partner.", priority: "Low", date: "2026-07-18", status: "completed" }
    ],
    invoices: [
        { id: "INV-9981", clientName: "Tata Sons Private Ltd.", subject: "Retainer Fee - Supreme Court Anti-Trust Suit", fee: 150000, gst: 27000, status: "Paid", date: "2026-07-05" },
        { id: "INV-9982", clientName: "Reliance Retail Venture", subject: "Drafting Notice - Shapoorji Contract Breach", fee: 120000, gst: 21600, status: "Outstanding", date: "2026-07-11" },
        { id: "INV-9983", clientName: "Infosys Technologies", subject: "Consulting - Software Patent Injunction", fee: 200000, gst: 36000, status: "Outstanding", date: "2026-07-16" }
    ],
    auditTrail: [
        { user: "System", action: "Server secure node backup compiled.", time: "2026-07-19 14:00" },
        { user: "admin@knslaw.com", action: "Security permissions matrix updated.", time: "2026-07-19 14:15" },
        { user: "admin@knslaw.com", action: "Client dossier created: Ramesh Kumar.", time: "2026-07-19 14:22" }
    ],
    notifications: [
        { id: "n1", title: "Writ Petition Signed", desc: "Client Tata Sons completed E-Sign on retainer notice.", time: "2 hrs ago", read: false },
        { id: "n2", title: "New Document Uploaded", desc: "Aadhaar Card uploaded for Reliance intake.", time: "Yesterday", read: false },
        { id: "n3", title: "Billing Settlement Success", desc: "Invoice INV-9981 registered as Paid by Accountant.", time: "3 days ago", read: true }
    ],
    activeDocFolderFilter: ""
};

// ==========================================================================
// PORTAL MAIN ROUTER & CONTROLLER
// ==========================================================================

window.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // Bind Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearchPalette();
        }
        if (e.key === 'Escape') {
            closeSearchPalette();
        }
    });

    // Populate Initial Data Tables
    renderDashboardStats();
    renderQueueTable();
    renderCRMTable();
    renderCasesTable();
    renderConsultationTable();
    renderDocsList();
    renderKanbanBoard();
    renderInvoicesTable();
    renderHRRoster();
    renderAuditTrail();
    populateSelectDropdowns();
});
// SPA View Switcher
function switchView(viewId) {
    // Remove active class from all views
    document.querySelectorAll('.workspace-view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Add active class to target view
    const targetView = document.getElementById('view-' + viewId);
    if (targetView) {
        targetView.classList.add('active');
    }
    
    // Update Sidebar highlight
    document.querySelectorAll('.menu-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find sidebar link corresponding to this view
    const links = Array.from(document.querySelectorAll('.menu-link'));
    const matchedLink = links.find(l => l.getAttribute('onclick').includes(viewId));
    if (matchedLink) {
        matchedLink.classList.add('active');
    }
    
    // Update breadcrumb
    const lbl = viewId.replace('-', ' ').toUpperCase();
    document.getElementById('breadcrumb-current-view').innerText = lbl;
    
    // Log activity
    addAuditLog(state.currentUser.username, `Opened workspace view: ${lbl}`);
    
    // Close sidebar overlay on mobile clicks
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('app-sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar && sidebar.classList.contains('mobile-open')) {
            sidebar.classList.remove('mobile-open');
        }
        if (overlay && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        }
    }
}

// Collapsible Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('mobile-open');
        if (overlay) {
            overlay.classList.toggle('active');
        }
    } else {
        sidebar.classList.toggle('collapsed');
    }
}
// Theme Toggle System
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    
    const themeIcon = document.getElementById('theme-icon');
    if (newTheme === 'dark') {
        themeIcon.setAttribute('data-lucide', 'moon');
    } else {
        themeIcon.setAttribute('data-lucide', 'sun');
    }
    lucide.createIcons();
    triggerToast(`Switched interface theme: ${newTheme.toUpperCase()} mode`, "info");
}

// ==========================================================================
// AUTHENTICATION SECURITY SYSTEMS
// ==========================================================================

function switchAuthView(viewId) {
    document.querySelectorAll('.auth-card').forEach(card => {
        card.style.display = 'none';
    });
    document.getElementById(viewId).style.display = 'block';
}

function processLogin() {
    // Simulates multi-factor prompt
    switchAuthView('auth-2fa');
}

function verifyTwoFactor() {
    // Go directly to role selector
    switchAuthView('auth-roles');
    triggerToast("Identity confirmed. Access credential selection unlocked.", "success");
}

function simulateForgotReset() {
    triggerToast("Reset credentials link dispatched to corporate workspace.", "success");
    switchAuthView('auth-login');
}

function simulatePasswordChange() {
    triggerToast("Workspace password successfully reset.", "success");
    switchAuthView('auth-login');
}

// Dynamically Adjust View Layouts depending on Security Role
function simulateRoleBypass(role) {
    state.currentUser.role = role;
    
    // Set user profiles details
    const userDisplayNames = {
        admin: { name: "Adv. Harish Salve", email: "admin@knslaw.com", label: "Managing Partner", av: "HS" },
        lawyer: { name: "Adv. Abhishek Singhvi", email: "singhvi@knslaw.com", label: "Senior Counsel", av: "AS" },
        junior_lawyer: { name: "Adv. Pallavi Shroff", email: "shroff@knslaw.com", label: "Junior Associate", av: "PS" },
        receptionist: { name: "Nisha Sen", email: "reception@knslaw.com", label: "Front Desk Clerk", av: "NS" },
        accountant: { name: "Raman Iyer", email: "accounts@knslaw.com", label: "Chief Accountant", av: "RI" },
        client: { name: "Tata Sons Executive", email: "executive@tata.com", label: "Corporate Client", av: "TS" }
    };
    
    const details = userDisplayNames[role];
    state.currentUser.name = details.name;
    state.currentUser.username = details.email;
    state.currentUser.avatar = details.av;
    
    document.getElementById('user-name').innerText = details.name;
    document.getElementById('user-role-lbl').innerText = details.label;
    document.getElementById('user-avatar').innerText = details.av;
    
    // Apply Role Custom Visibilities
    applyRoleBasedAccess(role);
    
    // Switch panels
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('portal-container').style.display = 'flex';
    
    addAuditLog(details.email, `Authenticated login via credentials bypass role: ${role.toUpperCase()}`);
    triggerToast(`Welcome back, ${details.name}. Secure chamber portal online.`, "success");
    
    // Reset back to dashboard view
    switchView('dashboard');
}

function applyRoleBasedAccess(role) {
    const sidebar = document.getElementById('app-sidebar');
    const links = sidebar.querySelectorAll('.menu-link');
    
    // Reset viewable buttons
    links.forEach(l => l.style.display = 'flex');
    
    // Restrict views
    if (role === 'client') {
        // Clients can only access Dashboard, Cases, consultations, documents, and AI Assistant
        links.forEach(link => {
            const clickAttr = link.getAttribute('onclick');
            if (clickAttr.includes('crm') || clickAttr.includes('kanban') || clickAttr.includes('accounts') || clickAttr.includes('hr') || clickAttr.includes('admin') || clickAttr.includes('research')) {
                link.style.display = 'none';
            }
        });
    } else if (role === 'receptionist') {
        // Receptionist can see Dashboard, CRM, Cases, Consultations
        links.forEach(link => {
            const clickAttr = link.getAttribute('onclick');
            if (clickAttr.includes('ai-drafting') || clickAttr.includes('accounts') || clickAttr.includes('hr') || clickAttr.includes('admin') || clickAttr.includes('research')) {
                link.style.display = 'none';
            }
        });
    } else if (role === 'accountant') {
        // Accountant sees Dashboard, Invoices
        links.forEach(link => {
            const clickAttr = link.getAttribute('onclick');
            if (clickAttr.includes('ai-drafting') || clickAttr.includes('research') || clickAttr.includes('kanban') || clickAttr.includes('hr') || clickAttr.includes('admin')) {
                link.style.display = 'none';
            }
        });
    }
    
    // Refresh stats layout for role targets
    renderDashboardStats();
}

function processLogout() {
    document.getElementById('portal-container').style.display = 'none';
    document.getElementById('auth-container').style.display = 'flex';
    switchAuthView('auth-login');
    
    addAuditLog(state.currentUser.username, "Terminated session. Logged out.");
    triggerToast("Workspace session expired. Safely logged out.", "warning");
}

// ==========================================================================
// RENDER & POPULATION UTILITIES
// ==========================================================================

function populateSelectDropdowns() {
    const caseClientSel = document.getElementById('case-create-client');
    const consClientSel = document.getElementById('cons-client-select');
    const invClientSel = document.getElementById('inv-client-select');
    const aiCaseSel = document.getElementById('ai-draft-case-select');
    
    // Clear
    caseClientSel.innerHTML = '';
    consClientSel.innerHTML = '';
    invClientSel.innerHTML = '';
    aiCaseSel.innerHTML = '<option value="">Link Dispute Matter...</option>';
    
    state.clients.forEach(c => {
        caseClientSel.innerHTML += `<option value="${c.id}">${c.name}</option>`;
        consClientSel.innerHTML += `<option value="${c.id}">${c.name}</option>`;
        invClientSel.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
    
    state.cases.forEach(cs => {
        aiCaseSel.innerHTML += `<option value="${cs.id}">${cs.title} [${cs.id}]</option>`;
    });
}

function renderDashboardStats() {
    // Recalculate metrics
    document.getElementById('stat-val-clients').innerText = state.clients.length;
    document.getElementById('stat-val-cases').innerText = state.cases.length;
    document.getElementById('stat-val-calls').innerText = state.consultations.filter(c => c.status === 'Upcoming').length;
    document.getElementById('stat-val-drafts').innerText = state.tasks.filter(t => t.status === 'inprogress' || t.status === 'review').length;
    
    let revSum = state.invoices.reduce((sum, current) => sum + current.fee + current.gst, 0);
    document.getElementById('stat-val-revenue').innerText = "₹" + (revSum / 100000).toFixed(1) + "L";
}

// ==========================================================================
// CRM MODULE & KYC SYSTEMS
// ==========================================================================

function renderCRMTable() {
    const tbody = document.getElementById('crm-tbody');
    const searchVal = document.getElementById('crm-search').value.toLowerCase();
    const typeVal = document.getElementById('crm-type-filter').value;
    
    tbody.innerHTML = '';
    
    const filtered = state.clients.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchVal) || c.email.toLowerCase().includes(searchVal) || c.pan.toLowerCase().includes(searchVal);
        const matchesType = typeVal === '' || c.type === typeVal;
        return matchesSearch && matchesType;
    });
    
    filtered.forEach(c => {
        const badgeClass = c.verified === 'Approved' ? 'badge-success' : 'badge-warning';
        tbody.innerHTML += `
            <tr>
                <td><strong>${c.name}</strong></td>
                <td>${c.type}</td>
                <td><code style="font-size:12px;">${c.pan}</code></td>
                <td>
                    <span style="font-size:11px; display:block;">GST: ${c.gst}</span>
                    <span style="font-size:11px; display:block;">Aadhaar: ${c.aadhaar}</span>
                </td>
                <td><span class="badge ${badgeClass}">${c.verified}</span></td>
                <td>${c.created}</td>
                <td>
                    <button class="btn btn-outline btn-sm" onclick="openCRMDetails('${c.id}')"><i data-lucide="folder"></i> Dossier</button>
                </td>
            </tr>
        `;
    });
    
    lucide.createIcons();
}

function openCRMDetails(clientId) {
    const client = state.clients.find(c => c.id === clientId);
    if (!client) return;
    
    document.getElementById('crm-det-name').innerText = client.name;
    document.getElementById('crm-det-email').innerText = client.email;
    document.getElementById('crm-det-phone').innerText = client.phone;
    document.getElementById('crm-det-address').innerText = client.address;
    document.getElementById('crm-det-pan').innerText = client.pan;
    document.getElementById('crm-det-aadhaar').innerText = client.aadhaar;
    document.getElementById('crm-det-gst').innerText = client.gst;
    
    // Status badges
    const statusLbl = document.getElementById('crm-det-ai-status');
    const ocrLbl = document.getElementById('crm-det-ocr-status');
    if (client.verified === 'Approved') {
        statusLbl.className = 'badge badge-success';
        statusLbl.innerText = 'KYC Cleared';
        ocrLbl.className = 'badge badge-success';
        ocrLbl.innerText = '99.5% Confidence Match';
    } else {
        statusLbl.className = 'badge badge-warning';
        statusLbl.innerText = 'Pending Review';
        ocrLbl.className = 'badge badge-warning';
        ocrLbl.innerText = 'Awaiting Documents';
    }
    
    // Fill timelines
    const timeline = document.getElementById('crm-det-timeline');
    timeline.innerHTML = `
        <div class="timeline-node completed" style="margin-bottom:12px; padding-left:14px; position:relative;">
            <div class="timeline-dot" style="left:-6px; width:8px; height:8px;"></div>
            <strong>Corporate Ingestion Filed</strong>
            <div style="font-size:10px; color:var(--text-muted);">${client.created}</div>
        </div>
        <div class="timeline-node active" style="margin-bottom:12px; padding-left:14px; position:relative;">
            <div class="timeline-dot" style="left:-6px; width:8px; height:8px;"></div>
            <strong>Identity Credentials verification checks</strong>
            <div style="font-size:10px; color:var(--text-muted);">Ongoing compliance checks</div>
        </div>
    `;
    
    // Cases linked
    const casesBox = document.getElementById('crm-det-cases');
    casesBox.innerHTML = '';
    const clientCases = state.cases.filter(cs => cs.clientId === clientId);
    if (clientCases.length === 0) {
        casesBox.innerHTML = '<p style="color:var(--text-muted); font-size:12.5px;">No active dispute filings associated.</p>';
    } else {
        clientCases.forEach(cs => {
            casesBox.innerHTML += `
                <div style="border:1px solid var(--border-subtle); padding:10px; border-radius:var(--radius-element); background-color:var(--bg-workspace);">
                    <strong>${cs.id} - ${cs.title}</strong>
                    <span style="display:block; font-size:11px; color:var(--text-muted); margin-top:2px;">Lead: ${cs.lead}</span>
                </div>
            `;
        });
    }
    
    document.getElementById('crm-detail-section').style.display = 'block';
    document.getElementById('crm-detail-section').scrollIntoView({ behavior: 'smooth' });
}

function closeCRMDetails() {
    document.getElementById('crm-detail-section').style.display = 'none';
}

function openClientRegModal() {
    document.getElementById('modal-client-intake').classList.add('active');
}

function closeClientRegModal() {
    document.getElementById('modal-client-intake').classList.remove('active');
}

function submitClientIntake() {
    const name = document.getElementById('intake-name').value;
    const type = document.getElementById('intake-type').value;
    const email = document.getElementById('intake-email').value;
    const phone = document.getElementById('intake-phone').value;
    const pan = document.getElementById('intake-pan').value;
    const aadhaar = document.getElementById('intake-aadhaar').value;
    const gst = document.getElementById('intake-gst').value;
    const address = document.getElementById('intake-address').value;
    
    if (!name || !email) {
        triggerToast("Please input required Client Name and Email parameters", "danger");
        return;
    }
    
    const newClient = {
        id: "c" + (state.clients.length + 1),
        name,
        type,
        email,
        phone,
        pan: pan || "PENDING",
        aadhaar: aadhaar || "PENDING",
        gst: gst || "N/A",
        address: address || "No address specified",
        verified: "Pending",
        created: new Date().toISOString().split('T')[0]
    };
    
    state.clients.push(newClient);
    addAuditLog(state.currentUser.username, `Added new client intake record: ${name}`);
    triggerToast(`Intake database updated for client: ${name}`, "success");
    
    // Refresh
    renderCRMTable();
    populateSelectDropdowns();
    renderDashboardStats();
    closeClientRegModal();
}

function triggerKYCUploadField() {
    document.getElementById('kyc-file-upload-input').click();
}

function handleKYCDocUpload() {
    const fileInput = document.getElementById('kyc-file-upload-input');
    if (fileInput.files.length === 0) return;
    
    const fileName = fileInput.files[0].name;
    triggerToast(`Ingested KYC file: ${fileName}. Commencing AI alignment check...`, "info");
    
    // Simulate OCR check delay
    setTimeout(() => {
        document.getElementById('crm-det-ocr-status').className = 'badge badge-success';
        document.getElementById('crm-det-ocr-status').innerText = '100% OCR Match';
        document.getElementById('crm-det-ai-status').className = 'badge badge-success';
        document.getElementById('crm-det-ai-status').innerText = 'AI Authenticated';
        
        // Update client database
        triggerToast("KYC Dossier successfully approved via AI credentials match.", "success");
        addAuditLog(state.currentUser.username, `KYC files approved via AI matching for current dossier`);
    }, 2000);
}

// ==========================================================================
// CASE FILES MANAGEMENT
// ==========================================================================

function renderCasesTable() {
    const tbody = document.getElementById('case-tbody');
    const searchVal = document.getElementById('case-search').value.toLowerCase();
    const statusVal = document.getElementById('case-status-filter').value;
    
    tbody.innerHTML = '';
    
    const filtered = state.cases.filter(cs => {
        const client = state.clients.find(c => c.id === cs.clientId);
        const clientName = client ? client.name.toLowerCase() : '';
        const matchesSearch = cs.id.toLowerCase().includes(searchVal) || cs.title.toLowerCase().includes(searchVal) || clientName.includes(searchVal) || cs.court.toLowerCase().includes(searchVal);
        const matchesStatus = statusVal === '' || cs.status === statusVal;
        return matchesSearch && matchesStatus;
    });
    
    filtered.forEach(cs => {
        const client = state.clients.find(c => c.id === cs.clientId);
        const clientName = client ? client.name : 'Unknown';
        
        let statusBadge = 'badge-info';
        if (cs.status === 'Open') statusBadge = 'badge-success';
        if (cs.status === 'Drafting') statusBadge = 'badge-warning';
        if (cs.status === 'Closed') statusBadge = 'badge-danger';
        
        tbody.innerHTML += `
            <tr>
                <td><strong>${cs.id}</strong></td>
                <td>
                    <span style="font-weight:600; display:block;">${cs.title}</span>
                    <span style="font-size:11.5px; color:var(--text-muted);">Client: ${clientName}</span>
                </td>
                <td>${cs.court}</td>
                <td>${cs.lead}</td>
                <td>Next Hear: <strong>${cs.date}</strong></td>
                <td><span class="badge ${statusBadge}">${cs.status}</span></td>
                <td>
                    <button class="btn btn-outline btn-sm" onclick="openCaseDetails('${cs.id}')"><i data-lucide="eye"></i> View</button>
                </td>
            </tr>
        `;
    });
    
    lucide.createIcons();
}

function openCaseDetails(caseId) {
    const cs = state.cases.find(c => c.id === caseId);
    if (!cs) return;
    
    document.getElementById('case-det-id').innerText = cs.id;
    document.getElementById('case-det-title').innerText = cs.title;
    document.getElementById('case-det-court').innerText = cs.court;
    document.getElementById('case-det-lead').innerText = cs.lead;
    document.getElementById('case-det-team').innerText = cs.team;
    document.getElementById('case-det-date').innerText = cs.date;
    
    const statusLbl = document.getElementById('case-det-status');
    statusLbl.innerText = cs.status;
    statusLbl.className = 'badge ' + (cs.status === 'Open' ? 'badge-success' : cs.status === 'Closed' ? 'badge-danger' : 'badge-warning');
    
    // Fill case milestones
    const timeline = document.getElementById('case-det-timeline');
    timeline.innerHTML = '';
    cs.milestones.forEach(m => {
        timeline.innerHTML += `
            <div class="timeline-node completed">
                <div class="timeline-dot"></div>
                <div class="timeline-title">${m.title}</div>
                <div class="timeline-date">${m.date}</div>
                <div class="timeline-body">${m.desc}</div>
            </div>
        `;
    });
    
    // Fill case documents
    const docs = document.getElementById('case-det-docs');
    docs.innerHTML = `
        <div style="border:1px solid var(--border-subtle); padding:10px; border-radius:var(--radius-element); display:flex; justify-content:space-between; align-items:center; background-color:var(--bg-workspace);">
            <div>
                <strong>${cs.id}_Petitions_Draft.docx</strong>
                <span style="display:block; font-size:10px; color:var(--text-muted);">Size: 3.2MB | Privileged</span>
            </div>
            <button class="btn btn-outline btn-circle btn-sm" onclick="triggerToast('Secure document brief downloaded', 'success')"><i data-lucide="download"></i></button>
        </div>
    `;
    
    document.getElementById('case-detail-section').style.display = 'block';
    document.getElementById('case-detail-section').scrollIntoView({ behavior: 'smooth' });
    lucide.createIcons();
}

function closeCaseDetails() {
    document.getElementById('case-detail-section').style.display = 'none';
}

function openCaseCreateModal() {
    document.getElementById('modal-case-create').classList.add('active');
}

function closeCaseCreateModal() {
    document.getElementById('modal-case-create').classList.remove('active');
}

function submitCaseDocket() {
    const clientId = document.getElementById('case-create-client').value;
    const title = document.getElementById('case-create-title').value;
    const court = document.getElementById('case-create-court').value;
    const lead = document.getElementById('case-create-lead').value;
    
    if (!title || !court) {
        triggerToast("Please complete Title and Court parameters.", "danger");
        return;
    }
    
    const newCase = {
        id: "SLP-" + (state.cases.length + 5000),
        clientId,
        title,
        court,
        lead,
        team: "Adv. Rahul Bajaj, Associates",
        date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 10 days out
        status: "Drafting",
        milestones: [
            { title: "Matter Docket Opened", date: new Date().toISOString().split('T')[0], desc: "Filing team assigned to construct draft petition briefs." }
        ]
    };
    
    state.cases.push(newCase);
    addAuditLog(state.currentUser.username, `Docket created for case file: ${newCase.id} - ${title}`);
    triggerToast(`Judicial case file published: ${newCase.id}`, "success");
    
    renderCasesTable();
    populateSelectDropdowns();
    renderDashboardStats();
    closeCaseCreateModal();
}

// ==========================================================================
// CONSULTATIONS & VIDEO CONFERENCE
// ==========================================================================

function renderConsultationTable() {
    const tbody = document.getElementById('consultation-tbody');
    tbody.innerHTML = '';
    
    state.consultations.forEach(c => {
        const badge = c.status === 'Completed' ? 'badge-success' : 'badge-warning';
        
        let buttonAction = '';
        if (c.status === 'Upcoming' && c.type === 'Video Conference') {
            buttonAction = `<button class="btn btn-primary btn-sm" onclick="joinVideoConsultation('${c.id}')"><i data-lucide="video"></i> Join Call</button>`;
        } else {
            buttonAction = `<button class="btn btn-outline btn-sm" disabled><i data-lucide="check"></i> Ended</button>`;
        }
        
        tbody.innerHTML += `
            <tr>
                <td><strong>${c.clientName}</strong></td>
                <td>${c.lawyer}</td>
                <td>${c.date} | <strong>${c.time}</strong></td>
                <td>${c.type}</td>
                <td>₹${c.fee.toLocaleString()}</td>
                <td><span class="badge ${badge}">${c.status}</span></td>
                <td>${buttonAction}</td>
            </tr>
        `;
    });
    
    lucide.createIcons();
}

function openConsultationModal() {
    document.getElementById('modal-consultation-schedule').classList.add('active');
}

function closeConsultationModal() {
    document.getElementById('modal-consultation-schedule').classList.remove('active');
}

function submitConsultationBooking() {
    const clientId = document.getElementById('cons-client-select').value;
    const client = state.clients.find(c => c.id === clientId);
    const clientName = client ? client.name : 'Unknown Client';
    
    const lawyer = document.getElementById('cons-lawyer-select').value;
    const date = document.getElementById('cons-date').value;
    const time = document.getElementById('cons-time').value;
    const type = document.getElementById('cons-type').value;
    const fee = parseInt(document.getElementById('cons-fee').value);
    
    if (!date || !time) {
        triggerToast("Provide a valid date and clock time.", "danger");
        return;
    }
    
    const newBooking = {
        id: "con-" + (state.consultations.length + 1),
        clientName,
        lawyer,
        date,
        time,
        type,
        fee,
        status: "Upcoming"
    };
    
    state.consultations.push(newBooking);
    addAuditLog(state.currentUser.username, `Scheduled legal consultation with: ${clientName}`);
    triggerToast(`Consultation slot registered for ${clientName}`, "success");
    
    renderConsultationTable();
    renderDashboardStats();
    closeConsultationModal();
}

// Teams Consultation Video Controls
let videoCallState = { mic: true, camera: true };
let activeConsId = '';
let whiteboardBound = false;

function joinVideoConsultation(consId) {
    activeConsId = consId;
    const cons = state.consultations.find(c => c.id === consId);
    if (!cons) return;
    
    document.getElementById('video-client-name').innerText = cons.clientName;
    
    // Toggle view
    document.getElementById('consultation-booking-panel').style.display = 'none';
    document.getElementById('video-consultation-portal').style.display = 'grid';
    
    addAuditLog(state.currentUser.username, `Joined secure Video chamber room for consultation: ${consId}`);
    triggerToast("Connected to KNS secure meeting node. Room ready.", "success");
    
    // Clear dynamic summary
    document.getElementById('ai-consult-summary-box').innerHTML = `
        <p style="color:var(--text-muted); text-align:center;">Click "Compile AI Memo" to generate key points, facts, and action items in real-time.</p>
    `;
    
    // Initialize drawing canvas if drawing toggled
    setupWhiteboardCanvas();
}

function toggleVideoMic() {
    videoCallState.mic = !videoCallState.mic;
    const btn = document.getElementById('btn-video-mic');
    btn.classList.toggle('active', !videoCallState.mic);
    triggerToast(videoCallState.mic ? "Microphone active" : "Microphone muted", "info");
}

function toggleVideoCamera() {
    videoCallState.camera = !videoCallState.camera;
    const btn = document.getElementById('btn-video-camera');
    btn.classList.toggle('active', !videoCallState.camera);
    triggerToast(videoCallState.camera ? "Video camera streaming" : "Video camera stream suspended", "info");
}

function triggerScreenShare() {
    triggerToast("Initializing secure screen presentation stream...", "info");
}

function switchVideoTab(tabName) {
    document.getElementById('video-tab-chat').style.display = 'none';
    document.getElementById('video-tab-esign').style.display = 'none';
    document.getElementById('video-tab-summary').style.display = 'none';
    
    document.getElementById('video-tab-' + tabName).style.display = 'flex';
}

function simulateClientESign() {
    triggerToast("E-Signature request broadcasted to remote client device...", "info");
    setTimeout(() => {
        triggerToast("Client authenticated via Aadhaar OTP and signed agreement successfully.", "success");
        addAuditLog(state.currentUser.username, "Client executed live E-Signature certificate on Retainer document");
        
        // Add invoice entry automatically
        const cons = state.consultations.find(c => c.id === activeConsId);
        const name = cons ? cons.clientName : "Consultation Litigant";
        
        const newInv = {
            id: "INV-" + (state.invoices.length + 9980),
            clientName: name,
            subject: "Retainer Consultation - E-Sign Executed",
            fee: cons ? cons.fee : 15000,
            gst: (cons ? cons.fee : 15000) * 0.18,
            status: "Outstanding",
            date: new Date().toISOString().split('T')[0]
        };
        state.invoices.push(newInv);
        renderInvoicesTable();
    }, 2000);
}

function triggerAICallSummary() {
    triggerToast("AI listening agents evaluating meeting audio waveforms...", "info");
    
    setTimeout(() => {
        const box = document.getElementById('ai-consult-summary-box');
        box.innerHTML = `
            <div style="font-weight:700; color:var(--primary); margin-bottom:8px;">AI Consultation Summary Report</div>
            <p><strong>Matter:</strong> Anticompetitive cartel practices, Companies Act breaches</p>
            <p style="margin-top:6px;"><strong>Key Legal Issues:</strong> Violations under Competition Act Section 4 (Abuse of Dominant Position)</p>
            <p style="margin-top:6px;"><strong>Core Client Facts:</strong> Client disputed corporate market share assertions submitted by respondents. Affirmed zero prior agreement on price caps.</p>
            <p style="margin-top:6px;"><strong>Action Items:</strong></p>
            <ul style="margin-left: 16px; margin-top:4px;">
                <li>Advocate Shroff to compile draft rejoinder clauses before July 21.</li>
                <li>Client to upload verified market share audits folder.</li>
            </ul>
        `;
        switchVideoTab('summary');
        triggerToast("AI consultation briefing compiled and saved to dossier logs.", "success");
        addAuditLog(state.currentUser.username, "Generated AI meeting briefing summary");
    }, 2000);
}

function endVideoConsultation() {
    document.getElementById('video-consultation-portal').style.display = 'none';
    document.getElementById('consultation-booking-panel').style.display = 'block';
    
    // Mark completed
    const cons = state.consultations.find(c => c.id === activeConsId);
    if (cons) {
        cons.status = 'Completed';
    }
    
    renderConsultationTable();
    addAuditLog(state.currentUser.username, `Concluded video room: ${activeConsId}`);
    triggerToast("Video consultation room safely disconnected.", "warning");
}

// Canvas Drawing logic for meeting whiteboard
function setupWhiteboardCanvas() {
    if (whiteboardBound) return;
    const canvas = document.getElementById('consultation-whiteboard');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let drawing = false;
    
    // Fit canvas resolution to bounds
    canvas.width = 400;
    canvas.height = 300;
    
    ctx.strokeStyle = '#2563EB';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    
    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!drawing) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    });
    
    canvas.addEventListener('mouseup', () => drawing = false);
    canvas.addEventListener('mouseleave', () => drawing = false);
    
    whiteboardBound = true;
}

function clearWhiteboard() {
    const canvas = document.getElementById('consultation-whiteboard');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function toggleWhiteboard(show) {
    document.getElementById('video-whiteboard-canvas').style.display = show ? 'block' : 'none';
    document.getElementById('video-client-cam').style.display = show ? 'none' : 'flex';
}

// ==========================================================================
// DOCUMENT REPOSITORY & OCR SCANNING
// ==========================================================================

function filterDocFolder(folderName) {
    state.activeDocFolderFilter = folderName;
    renderDocsList();
}

function renderDocsList() {
    const grid = document.getElementById('docs-grid-container');
    const searchVal = document.getElementById('doc-search').value.toLowerCase();
    
    grid.innerHTML = '';
    
    const filtered = state.documents.filter(d => {
        const matchesSearch = d.name.toLowerCase().includes(searchVal) || d.folder.toLowerCase().includes(searchVal);
        const matchesFolder = state.activeDocFolderFilter === '' || d.folder === state.activeDocFolderFilter;
        return matchesSearch && matchesFolder;
    });
    
    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: span 3; color:var(--text-muted); text-align:center; padding: 40px;">No folder files matching criteria.</p>`;
        return;
    }
    
    filtered.forEach(d => {
        const lockIcon = d.locked ? '<i data-lucide="lock" style="width:14px; color:var(--danger);"></i>' : '<i data-lucide="unlock" style="width:14px; color:var(--success);"></i>';
        
        let tagsHtml = '';
        d.tags.forEach(t => {
            tagsHtml += `<span class="badge badge-info" style="font-size:9px; padding:2px 6px; margin-right:4px;">${t}</span>`;
        });
        
        grid.innerHTML += `
            <div class="card" style="margin-bottom:0; display:flex; flex-direction:column; justify-content:space-between; min-height: 150px;">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <i data-lucide="file" style="color:var(--primary); width:28px; height:28px;"></i>
                        <span style="display:flex; gap:6px;">
                            ${lockIcon}
                            <button class="icon-badge-btn" style="padding:0; margin:0;" onclick="toggleLockDoc('${d.id}')">
                                <i data-lucide="settings" style="width:14px;"></i>
                            </button>
                        </span>
                    </div>
                    <h4 style="font-size:12.5px; margin-top:12px; font-weight:600; overflow-wrap: anywhere;">${d.name}</h4>
                    <span style="font-size:10px; color:var(--text-muted); display:block; margin-top:4px;">Folder: ${d.folder} | ${d.size}</span>
                </div>
                <div style="border-top:1px solid var(--border-subtle); margin-top:12px; padding-top:10px; display:flex; justify-content:space-between; align-items:center;">
                    <div>${tagsHtml}</div>
                    <button class="btn btn-secondary btn-circle btn-sm" onclick="triggerToast('Decrypted document safely downloaded under local keys', 'success')"><i data-lucide="download"></i></button>
                </div>
            </div>
        `;
    });
    
    lucide.createIcons();
}

function toggleLockDoc(docId) {
    const doc = state.documents.find(d => d.id === docId);
    if (!doc) return;
    
    // Check permission (accountant cannot toggle locks)
    if (state.currentUser.role === 'accountant') {
        triggerToast("Access Denied: Financial roles cannot toggle case file locks.", "danger");
        return;
    }
    
    doc.locked = !doc.locked;
    addAuditLog(state.currentUser.username, `Toggled lock credentials on document: ${doc.name} (Locked: ${doc.locked})`);
    triggerToast(doc.locked ? "File locked under corporate vault keys." : "File safety lock removed.", "info");
    renderDocsList();
}

// OCR Processing Actions
function openOCRModal() {
    document.getElementById('modal-ocr').classList.add('active');
    // Reset state
    document.getElementById('ocr-progress-container').style.display = 'none';
    document.getElementById('ocr-results-panel').style.display = 'none';
    document.getElementById('ocr-upload-lbl').innerText = 'Click to Select Legal PDF or evidence image';
}

function closeOCRModal() {
    document.getElementById('modal-ocr').classList.remove('active');
}

function simulateOCRFileUpload() {
    document.getElementById('ocr-file-input').click();
}

function handleOCRFileSelected() {
    const input = document.getElementById('ocr-file-input');
    if (input.files.length === 0) return;
    
    const fileName = input.files[0].name;
    document.getElementById('ocr-upload-lbl').innerText = `Selected: ${fileName}`;
    
    // Trigger Progress
    const progressBox = document.getElementById('ocr-progress-container');
    const bar = document.getElementById('ocr-progress-bar');
    const lbl = document.getElementById('ocr-progress-lbl');
    progressBox.style.display = 'block';
    
    let count = 0;
    const interval = setInterval(() => {
        count += 20;
        bar.style.width = count + '%';
        lbl.innerText = count + '%';
        
        if (count >= 100) {
            clearInterval(interval);
            progressBox.style.display = 'none';
            displayOCRResults(fileName);
        }
    }, 300);
}

function displayOCRResults(fileName) {
    document.getElementById('ocr-results-panel').style.display = 'block';
    
    const originalText = `<b>[CONSTITUTION CLAUSE]</b><br>MEMORANDUM OF ASSOCIATION OF TATA SONS PRIVATE LIMITED<br><br>
    The corporate objects of the firm are to carry on trading or investment in national assets...`;
    
    const editableText = `MEMORANDUM OF ASSOCIATION OF TATA SONS PRIVATE LIMITED\n\nThe corporate objects of the firm are to carry on trading or investment in national assets...`;
    
    document.getElementById('ocr-text-original').innerHTML = originalText;
    document.getElementById('ocr-text-editable').value = editableText;
    
    triggerToast("OCR textual conversion finished successfully.", "success");
    addAuditLog(state.currentUser.username, `Processed file through OCR scanning assistant: ${fileName}`);
}

function insertOCROutputToAIDraft() {
    const txt = document.getElementById('ocr-text-editable').value;
    document.getElementById('ai-draft-rich-editor').value = txt;
    
    triggerToast("Extracted OCR text copied to AI Drafting brief panel.", "success");
    switchView('ai-drafting');
    closeOCRModal();
}

// ==========================================================================
// AI DRAFTING ASSISTANT
// ==========================================================================

function loadCaseContextForAI() {
    const caseId = document.getElementById('ai-draft-case-select').value;
    const timelineBox = document.getElementById('ai-draft-timeline-box');
    const docsBox = document.getElementById('ai-draft-docs-box');
    
    if (!caseId) {
        timelineBox.innerHTML = '<p style="color:var(--text-muted);">Please select a matter link context.</p>';
        docsBox.innerHTML = '<p style="color:var(--text-muted);">None linked.</p>';
        return;
    }
    
    const cs = state.cases.find(c => c.id === caseId);
    if (!cs) return;
    
    // Fill left pane context
    timelineBox.innerHTML = '';
    cs.milestones.forEach(m => {
        timelineBox.innerHTML += `
            <div style="border-bottom:1px solid var(--border-subtle); padding-bottom:4px;">
                <strong>${m.title}</strong>
                <div style="font-size:9.5px; color:var(--text-muted);">${m.date}</div>
            </div>
        `;
    });
    
    docsBox.innerHTML = `
        <div style="font-size:10px; border:1px solid var(--border-subtle); padding:6px; border-radius:4px; background-color:var(--bg-workspace);">
            📄 ${cs.id}_Petitions_Draft.docx
        </div>
    `;
    
    triggerToast(`AI Drafting Model fed with case parameters for docket: ${cs.id}`, "info");
}

function triggerAIPrompt(promptText) {
    document.getElementById('ai-draft-chat-input').value = promptText;
    executeAIChat();
}

function executeAIChat() {
    const input = document.getElementById('ai-draft-chat-input');
    const val = input.value;
    if (!val) return;
    
    const msgContainer = document.getElementById('ai-drafting-messages');
    
    // Add user message
    msgContainer.innerHTML += `
        <div class="ai-message user">
            ${val}
        </div>
    `;
    
    input.value = '';
    msgContainer.scrollTop = msgContainer.scrollHeight;
    
    // Simulate AI thinking and typing response
    triggerToast("AI Legal assistant constructing filing draft...", "info");
    
    setTimeout(() => {
        let aiMsg = '';
        let editorDraft = '';
        let diffV1 = '';
        let diffV2 = '';
        
        if (val.includes('Writ Petition') || val.includes('Plaint')) {
            aiMsg = `I have drafted a Special Leave Petition (SLP) framework tailored to the Competition Act challenges. The full text has been generated in your right editor panel. Let me know if we need to modify clauses or add limitation citations.`;
            editorDraft = `IN THE SUPREME COURT OF INDIA\nCIVIL APPELLATE JURISDICTION\nSPECIAL LEAVE PETITION (CIVIL) NO. 4920 OF 2026\n\nIN THE MATTER OF:\nTATA SONS PRIVATE LIMITED ... PETITIONER\nVERSUS\nCOMPETITION COMMISSION OF INDIA ... RESPONDENT\n\nPETITION UNDER ARTICLE 136 OF THE CONSTITUTION OF INDIA\n\nTo,\nThe Honorable Chief Justice of India and his Companion Judges.\n\nTHE HUMBLE PETITION OF THE PETITIONER ABOVE NAMED\n\nMOST RESPECTFULLY SHOWETH:\n1. The Petitioner is filing this SLP against the final impugned order dated 15th June 2026 passed by the NCLAT.\n2. The NCLAT erred in holding that abuse of dominant position was substantiated based on raw market share ratios without proving transactional cartel action.`;
            diffV1 = `NCLAT ruled that market share indicates dominant abuse.`;
            diffV2 = `NCLAT erred in holding that abuse of dominant position was substantiated based on raw market share ratios without proving transactional cartel action.`;
        } else if (val.includes('Notice')) {
            aiMsg = `Writ Cease and Desist notice successfully composed. Available in right editor workspace. Includes copyright/patent infringement warning language.`;
            editorDraft = `CEASE & DESIST LEGAL NOTICE\n\nDate: 19th July 2026\n\nTo,\nXYZ Technologies Corp,\nElectronics City, Bangalore.\n\nUnder instructions from our client, Infosys Technologies, we hereby serve you with this notice for patent trademark infringement under Section 29 of the Trademarks Act.\n\nTake notice that you must immediately withdraw all infringing source codes...`;
            diffV1 = `Notice to stop code violations.`;
            diffV2 = `Under instructions from our client, Infosys Technologies, we hereby serve you with this notice for patent trademark infringement under Section 29 of the Trademarks Act.`;
        } else if (val.includes('Limitation')) {
            aiMsg = `Under Section 12 of the Limitation Act, 1963, the time limit for filing a Special Leave Petition (SLP) against an order of the High Court is 90 days. The impugned NCLAT order was passed on 15th June 2026, meaning your filing limit expires on 13th September 2026. You have 56 days remaining.`;
            editorDraft = `LIMITATION PERIOD ANALYSIS BRIEF\n\n- Impugned Order Date: 15th June 2026\n- Limitation Act 1963 Target: 90 Days\n- Expiry Date: 13th September 2026\n- Status: SAFE (56 days remaining)`;
            diffV1 = `No checks done.`;
            diffV2 = `- Expiry Date: 13th September 2026 (SAFE - 56 days remaining)`;
        } else {
            aiMsg = `I have updated your legal draft workspace based on your prompt: "${val}". Let me know if you would like me to cite relevant judgments or review sections.`;
            editorDraft = `AMENDED LEGAL CLAUSES\n\n[Section Added]\n- The parties hereby agree to settle all arbitration challenges under Mumbai High Court jurisdiction rules.`;
            diffV1 = `Old arbitration text.`;
            diffV2 = `The parties hereby agree to settle all arbitration challenges under Mumbai High Court jurisdiction rules.`;
        }
        
        // Add AI response
        msgContainer.innerHTML += `
            <div class="ai-message assistant">
                ${aiMsg}
            </div>
        `;
        msgContainer.scrollTop = msgContainer.scrollHeight;
        
        // Load editor
        document.getElementById('ai-draft-rich-editor').value = editorDraft;
        
        // Load diff comparator panels
        document.getElementById('ai-version-compare-box').style.display = 'block';
        document.getElementById('ai-diff-v1').innerText = diffV1;
        document.getElementById('ai-diff-v2').innerText = diffV2;
        
        addAuditLog(state.currentUser.username, `Executed AI Drafting helper: ${val}`);
        triggerToast("AI Legal Copilot compiled successfully.", "success");
    }, 1500);
}

function exportAIDraftToPDF() {
    const val = document.getElementById('ai-draft-rich-editor').value;
    if (!val) {
        triggerToast("Editor workspace is empty.", "warning");
        return;
    }
    // Simulate export
    triggerToast("Generating print-ready PDF file format...", "info");
    setTimeout(() => {
        triggerToast("Filing PDF exported successfully to local downloads directory.", "success");
        addAuditLog(state.currentUser.username, "Exported AI legal draft as PDF");
    }, 1500);
}

function exportAIDraftToWord() {
    const val = document.getElementById('ai-draft-rich-editor').value;
    if (!val) {
        triggerToast("Editor workspace is empty.", "warning");
        return;
    }
    triggerToast("Generating Word docx file layout...", "info");
    setTimeout(() => {
        triggerToast("DOCX file compiled and downloaded successfully.", "success");
        addAuditLog(state.currentUser.username, "Exported AI legal draft as Word document");
    }, 1500);
}

// ==========================================================================
// LEGAL RESEARCH SEARCH ENGINE
// ==========================================================================

function executeLegalSearch() {
    const query = document.getElementById('research-query-input').value;
    if (!query) {
        triggerToast("Please input search parameters.", "warning");
        return;
    }
    
    triggerToast("AI search index crawling High Court & Supreme Court dockets...", "info");
    
    setTimeout(() => {
        const resultsBox = document.getElementById('research-results-container');
        resultsBox.innerHTML = '';
        
        // Mocking search results based on query
        if (query.toLowerCase().includes('138') || query.toLowerCase().includes('negotiable')) {
            resultsBox.innerHTML = `
                <div class="card" style="margin-bottom:0;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <span class="badge badge-success">Section 138 - Negotiable Instruments Act, 1881</span>
                        <span style="font-size:12px; color:var(--text-muted);">Judicial Citation: (1881 Act 26)</span>
                    </div>
                    <h3 style="font-size:15px; margin-top:8px;">Dishonour of cheque for insufficiency, etc., of funds in the account.</h3>
                    <p style="font-size:13px; color:var(--text-secondary); margin-top:8px; line-height:1.5;">
                        Where any cheque drawn by a person on an account maintained by him with a banker for payment of any amount of money to another person... is returned by the bank unpaid, either because of the amount of money standing to the credit of that account is insufficient to honour the cheque... such person shall be deemed to have committed an offence...
                    </p>
                    <div style="margin-top:12px; border-top: 1px solid var(--border-subtle); padding-top:8px; font-size:11px;">
                        <strong>Key Precedent:</strong> <i>Dalmia Cement Ltd. vs. Galaxy Traders & Agencies Ltd. (2001 SC)</i> - Supreme Court ruled that the object of Section 138 is to promote efficacy of banking transactions.
                    </div>
                </div>
            `;
        } else {
            resultsBox.innerHTML = `
                <div class="card" style="margin-bottom:0;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <span class="badge badge-success">General Precedent Judgment</span>
                        <span style="font-size:12px; color:var(--text-muted);">Supreme Court citation</span>
                    </div>
                    <h3 style="font-size:15px; margin-top:8px;">Tata Cellular vs. Union of India (1994)</h3>
                    <p style="font-size:13px; color:var(--text-secondary); margin-top:8px; line-height:1.5;">
                        Establishes judicial review parameters concerning administrative actions and government tenders. Confirms that judicial oversight is focused on the decision-making process rather than the decision itself.
                    </p>
                </div>
            `;
        }
        
        triggerToast("Retrieved search results.", "success");
        addAuditLog(state.currentUser.username, `Executed legal search query: "${query}"`);
    }, 1200);
}

// ==========================================================================
// KANBAN WORKFLOW SYSTEMS
// ==========================================================================

function renderKanbanBoard() {
    const listTodo = document.getElementById('kanban-list-todo');
    const listInprogress = document.getElementById('kanban-list-inprogress');
    const listReview = document.getElementById('kanban-list-review');
    const listCompleted = document.getElementById('kanban-list-completed');
    
    listTodo.innerHTML = '';
    listInprogress.innerHTML = '';
    listReview.innerHTML = '';
    listCompleted.innerHTML = '';
    
    let cntTodo = 0, cntInprogress = 0, cntReview = 0, cntCompleted = 0;
    
    state.tasks.forEach(t => {
        let badgeColor = 'badge-info';
        if (t.priority === 'High') badgeColor = 'badge-warning';
        if (t.priority === 'Urgent') badgeColor = 'badge-danger';
        
        const taskHtml = `
            <div class="kanban-card" draggable="true" ondragstart="handleDragStart(event, '${t.id}')">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                    <span class="badge ${badgeColor}" style="font-size:9.5px; padding:2px 6px;">${t.priority}</span>
                    <div style="display:flex; gap:2px;">
                        <button class="icon-badge-btn" style="padding:2px;" onclick="shiftTask('${t.id}', 'prev')" title="Move Left">←</button>
                        <button class="icon-badge-btn" style="padding:2px;" onclick="shiftTask('${t.id}', 'next')" title="Move Right">→</button>
                    </div>
                </div>
                <div class="kanban-card-title">${t.title}</div>
                <div class="kanban-card-desc">${t.desc}</div>
                <div class="kanban-card-footer">
                    <span class="kanban-card-date"><i data-lucide="calendar" style="width:11px; height:11px;"></i>${t.date}</span>
                </div>
            </div>
        `;
        
        if (t.status === 'todo') {
            listTodo.innerHTML += taskHtml;
            cntTodo++;
        } else if (t.status === 'inprogress') {
            listInprogress.innerHTML += taskHtml;
            cntInprogress++;
        } else if (t.status === 'review') {
            listReview.innerHTML += taskHtml;
            cntReview++;
        } else if (t.status === 'completed') {
            listCompleted.innerHTML += taskHtml;
            cntCompleted++;
        }
    });
    
    document.getElementById('kanban-cnt-todo').innerText = cntTodo;
    document.getElementById('kanban-cnt-inprogress').innerText = cntInprogress;
    document.getElementById('kanban-cnt-review').innerText = cntReview;
    document.getElementById('kanban-cnt-completed').innerText = cntCompleted;
    
    lucide.createIcons();
}

// Drag & Drop Handlers
let draggedTaskId = '';
function handleDragStart(e, taskId) {
    draggedTaskId = taskId;
    e.dataTransfer.setData('text/plain', taskId);
}

function allowDrop(e) {
    e.preventDefault();
}

function handleDrop(e, status) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain') || draggedTaskId;
    updateTaskStatus(taskId, status);
}

function shiftTask(taskId, direction) {
    const task = state.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    const columns = ['todo', 'inprogress', 'review', 'completed'];
    let idx = columns.indexOf(task.status);
    
    if (direction === 'next' && idx < 3) {
        updateTaskStatus(taskId, columns[idx + 1]);
    } else if (direction === 'prev' && idx > 0) {
        updateTaskStatus(taskId, columns[idx - 1]);
    }
}

function updateTaskStatus(taskId, status) {
    const task = state.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    task.status = status;
    addAuditLog(state.currentUser.username, `Moved task "${task.title}" to status column: ${status.toUpperCase()}`);
    renderKanbanBoard();
    renderDashboardStats();
}

function openAddTaskModal() {
    document.getElementById('modal-task-add').classList.add('active');
}

function closeAddTaskModal() {
    document.getElementById('modal-task-add').classList.remove('active');
}

function submitKanbanTask() {
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const priority = document.getElementById('task-priority').value;
    const date = document.getElementById('task-date').value;
    
    if (!title) {
        triggerToast("Specify a valid task assignment detail", "danger");
        return;
    }
    
    const newTask = {
        id: "t-" + (state.tasks.length + 1),
        title,
        desc: desc || "No description provided",
        priority,
        date,
        status: "todo"
    };
    
    state.tasks.push(newTask);
    addAuditLog(state.currentUser.username, `Added new operational Kanban task: "${title}"`);
    triggerToast("Task added to Kanban desk.", "success");
    
    renderKanbanBoard();
    renderDashboardStats();
    closeAddTaskModal();
}

// ==========================================================================
// ACCOUNTS & BILLING MODULE
// ==========================================================================

function renderInvoicesTable() {
    const tbody = document.getElementById('invoices-tbody');
    tbody.innerHTML = '';
    
    state.invoices.forEach(i => {
        const badgeClass = i.status === 'Paid' ? 'badge-success' : 'badge-warning';
        
        tbody.innerHTML += `
            <tr>
                <td><strong>${i.id}</strong></td>
                <td>${i.clientName}</td>
                <td>${i.subject}</td>
                <td>₹${i.fee.toLocaleString()}</td>
                <td>₹${i.gst.toLocaleString()}</td>
                <td><span class="badge ${badgeClass}">${i.status}</span></td>
                <td>${i.date}</td>
                <td>
                    <button class="btn btn-outline btn-circle btn-sm" onclick="printInvoiceReceipt('${i.id}')" title="Print Receipt"><i data-lucide="printer"></i></button>
                    ${i.status === 'Outstanding' ? `<button class="btn btn-secondary btn-sm" onclick="settleInvoice('${i.id}')">Settle</button>` : ''}
                </td>
            </tr>
        `;
    });
    
    lucide.createIcons();
}

function updateInvoiceGstCalc() {
    const feeInput = document.getElementById('inv-fee');
    const fee = parseInt(feeInput.value) || 0;
    
    const gstVal = fee * 0.18;
    const total = fee + gstVal;
    
    document.getElementById('inv-gst-val').value = "₹" + gstVal.toLocaleString();
    document.getElementById('inv-total-val').innerText = "₹" + total.toLocaleString();
}

function openInvoiceGenModal() {
    document.getElementById('modal-invoice-gen').classList.add('active');
    updateInvoiceGstCalc();
}

function closeInvoiceGenModal() {
    document.getElementById('modal-invoice-gen').classList.remove('active');
}

function submitInvoiceGeneration() {
    const clientId = document.getElementById('inv-client-select').value;
    const client = state.clients.find(c => c.id === clientId);
    const clientName = client ? client.name : 'Unknown Litigant';
    
    const subject = document.getElementById('inv-subject').value;
    const fee = parseInt(document.getElementById('inv-fee').value);
    
    if (!subject || !fee) {
        triggerToast("Specify a subject and billing fee.", "danger");
        return;
    }
    
    const newInvoice = {
        id: "INV-" + (state.invoices.length + 9981),
        clientName,
        subject,
        fee,
        gst: fee * 0.18,
        status: "Outstanding",
        date: new Date().toISOString().split('T')[0]
    };
    
    state.invoices.push(newInvoice);
    addAuditLog(state.currentUser.username, `Published billing invoice: ${newInvoice.id} for ${clientName}`);
    triggerToast(`Invoice published successfully: ${newInvoice.id}`, "success");
    
    renderInvoicesTable();
    renderDashboardStats();
    closeInvoiceGenModal();
}

function settleInvoice(invId) {
    const inv = state.invoices.find(i => i.id === invId);
    if (!inv) return;
    
    inv.status = 'Paid';
    addAuditLog(state.currentUser.username, `Account settled for invoice: ${invId}`);
    triggerToast(`Invoice ${invId} marked as Paid.`, "success");
    
    renderInvoicesTable();
    renderDashboardStats();
}

function printInvoiceReceipt(invId) {
    const inv = state.invoices.find(i => i.id === invId);
    if (!inv) return;
    
    const total = inv.fee + inv.gst;
    
    const printWin = window.open('', '_blank');
    printWin.document.write(`
        <html>
        <head>
            <title>Receipt - ${inv.id}</title>
            <style>
                body { font-family: sans-serif; padding: 40px; color: #333; }
                .header { border-bottom: 2px solid #2563EB; padding-bottom: 20px; margin-bottom: 30px; }
                .logo { font-size: 24px; font-weight: 700; color: #0F172A; }
                .title { font-size: 20px; font-weight: 600; text-align: right; float: right; }
                .details { margin-bottom: 30px; line-height: 1.6; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                th { background-color: #F8FAFC; }
                .total { font-weight: 700; font-size: 16px; background-color: #EFF6FF; }
            </style>
        </head>
        <body>
            <div class="header">
                <span class="logo">KNS LAW FIRM</span>
                <span class="title">OFFICIAL RECEIPT</span>
            </div>
            <div class="details">
                <p><strong>Invoice ID:</strong> ${inv.id}</p>
                <p><strong>Client:</strong> ${inv.clientName}</p>
                <p><strong>Date Generated:</strong> ${inv.date}</p>
                <p><strong>Status:</strong> ${inv.status.toUpperCase()}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Billing Particular / Subject</th>
                        <th>Base Amount</th>
                        <th>GST (18%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${inv.subject}</td>
                        <td>₹${inv.fee.toLocaleString()}</td>
                        <td>₹${inv.gst.toLocaleString()}</td>
                    </tr>
                    <tr class="total">
                        <td>Total Settle Fees</td>
                        <td colspan="2" style="text-align:right;">₹${total.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top:50px; border-top:1px dashed #ccc; padding-top:20px; font-size:11px; text-align:center; color:#999;">
                This is a computer generated document, requiring no physical signature. Authorized by KNS Law Cabinet Core.
            </div>
        </body>
        </html>
    `);
    printWin.document.close();
    printWin.print();
}

// ==========================================================================
// HR MODULE PORTAL
// ==========================================================================

function renderHRRoster() {
    const tbody = document.getElementById('hr-staff-tbody');
    tbody.innerHTML = '';
    
    const staff = [
        { name: "Adv. Harish Salve", role: "Senior Partner", attendance: "Active Workspace", leave: "No leaves scheduled" },
        { name: "Adv. Abhishek Singhvi", role: "Partner", attendance: "Active Workspace", leave: "No leaves scheduled" },
        { name: "Adv. Pallavi Shroff", role: "Junior Associate", attendance: "Active Workspace", leave: "Leave: July 28 - 30" },
        { name: "Nisha Sen", role: "Receptionist Officer", attendance: "Remote Desktop", leave: "No leaves scheduled" },
        { name: "Raman Iyer", role: "Accounting Manager", attendance: "Active Workspace", leave: "No leaves scheduled" }
    ];
    
    staff.forEach(s => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${s.name}</strong></td>
                <td>${s.role}</td>
                <td><span class="badge badge-success">${s.attendance}</span></td>
                <td><span style="font-size:11.5px; color:var(--text-muted);">${s.leave}</span></td>
            </tr>
        `;
    });
}

// ==========================================================================
// ADMINISTRATION & IMMUTABLE AUDIT TRAIL
// ==========================================================================

function renderAuditTrail() {
    const tbody = document.getElementById('audit-trail-tbody');
    tbody.innerHTML = '';
    
    // Reverse chronological order
    const logs = [...state.auditTrail].reverse();
    
    logs.forEach(l => {
        tbody.innerHTML += `
            <tr>
                <td><code style="font-size:12px;">${l.user}</code></td>
                <td>${l.action}</td>
                <td><span style="font-size:11.5px; color:var(--text-muted);">${l.time}</span></td>
            </tr>
        `;
    });
}

function addAuditLog(username, actionString) {
    const now = new Date();
    const timestamp = now.getFullYear() + '-' + 
                      String(now.getMonth()+1).padStart(2, '0') + '-' + 
                      String(now.getDate()).padStart(2, '0') + ' ' + 
                      String(now.getHours()).padStart(2, '0') + ':' + 
                      String(now.getMinutes()).padStart(2, '0');
                      
    state.auditTrail.push({
        user: username,
        action: actionString,
        time: timestamp
    });
    
    renderAuditTrail();
}

function savePermissionsMatrix() {
    addAuditLog(state.currentUser.username, "Modified security access matrix checkboxes.");
    triggerToast("Security roles matrix updated successfully.", "success");
}

// ==========================================================================
// NOTIFICATIONS SYSTEM & SEARCH PALETTE
// ==========================================================================

// Global toast alert
function triggerToast(message, type = "success") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconName = 'check-circle';
    if (type === 'warning') iconName = 'alert-circle';
    if (type === 'danger') iconName = 'alert-triangle';
    if (type === 'info') iconName = 'info';
    
    toast.innerHTML = `
        <i data-lucide="${iconName}"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    lucide.createIcons();
    
    // Slide out and destroy
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Search Overlay Palette
function openSearchPalette() {
    document.getElementById('search-palette-overlay').style.display = 'flex';
    document.getElementById('palette-search-input').focus();
    queryPalette();
}

function closeSearchPalette() {
    document.getElementById('search-palette-overlay').style.display = 'none';
}

function queryPalette() {
    const val = document.getElementById('palette-search-input').value.toLowerCase();
    const results = document.getElementById('palette-results-container');
    
    results.innerHTML = '';
    
    // Core Commands
    results.innerHTML += `
        <div class="palette-group-title">Command Shortcuts</div>
        <div class="palette-item" onclick="switchView('ai-drafting'); closeSearchPalette();">
            <span class="palette-item-icon"><i data-lucide="sparkles"></i></span>
            <div class="palette-item-info">
                <span class="palette-item-title">Start AI legal drafting assistant</span>
                <span class="palette-item-desc">Draft plaint, notices, verify precedents</span>
            </div>
        </div>
        <div class="palette-item" onclick="openClientRegModal(); closeSearchPalette();">
            <span class="palette-item-icon"><i data-lucide="user-plus"></i></span>
            <div class="palette-item-info">
                <span class="palette-item-title">Add Client Intake Record</span>
                <span class="palette-item-desc">Register GST, PAN, Aadhaar credentials</span>
            </div>
        </div>
    `;
    
    // Clients matches
    const clientMatches = state.clients.filter(c => c.name.toLowerCase().includes(val));
    if (clientMatches.length > 0) {
        results.innerHTML += '<div class="palette-group-title">Clients Directory</div>';
        clientMatches.forEach(c => {
            results.innerHTML += `
                <div class="palette-item" onclick="switchView('crm'); openCRMDetails('${c.id}'); closeSearchPalette();">
                    <span class="palette-item-icon"><i data-lucide="user"></i></span>
                    <div class="palette-item-info">
                        <span class="palette-item-title">${c.name}</span>
                        <span class="palette-item-desc">Email: ${c.email} | PAN: ${c.pan}</span>
                    </div>
                </div>
            `;
        });
    }
    
    // Cases matches
    const caseMatches = state.cases.filter(cs => cs.title.toLowerCase().includes(val) || cs.id.toLowerCase().includes(val));
    if (caseMatches.length > 0) {
        results.innerHTML += '<div class="palette-group-title">Active Cases</div>';
        caseMatches.forEach(cs => {
            results.innerHTML += `
                <div class="palette-item" onclick="switchView('cases'); openCaseDetails('${cs.id}'); closeSearchPalette();">
                    <span class="palette-item-icon"><i data-lucide="folder"></i></span>
                    <div class="palette-item-info">
                        <span class="palette-item-title">${cs.id} - ${cs.title}</span>
                        <span class="palette-item-desc">Court: ${cs.court} | lead: ${cs.lead}</span>
                    </div>
                </div>
            `;
        });
    }
    
    lucide.createIcons();
}

// Notification Drawer Toggle
function toggleNotificationDrawer() {
    document.getElementById('notification-drawer').classList.toggle('active');
    renderNotificationList();
}

function renderNotificationList() {
    const list = document.getElementById('drawer-notif-list');
    list.innerHTML = '';
    
    if (state.notifications.length === 0) {
        list.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:20px;">No alerts logs.</p>';
        return;
    }
    
    state.notifications.forEach(n => {
        const unreadClass = n.read ? '' : 'unread';
        list.innerHTML += `
            <div class="notification-item ${unreadClass}" onclick="markNotifRead('${n.id}')">
                <div class="notification-item-header">
                    <span class="notification-item-time">${n.time}</span>
                    ${!n.read ? `<span class="badge badge-info" style="font-size:8px; padding:1px 4px;">New</span>` : ''}
                </div>
                <div class="notification-item-title">${n.title}</div>
                <div class="notification-item-body">${n.desc}</div>
            </div>
        `;
    });
    
    // Calculate badge dots count
    const unreadCount = state.notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notif-count-badge');
    badge.style.display = unreadCount > 0 ? 'block' : 'none';
}

function markNotifRead(notifId) {
    const notif = state.notifications.find(n => n.id === notifId);
    if (notif) {
        notif.read = true;
    }
    renderNotificationList();
}

// Modal Toggle Utilities
function openProfileModal() { document.getElementById('modal-profile').classList.add('active'); }
function closeProfileModal() { document.getElementById('modal-profile').classList.remove('active'); }
function saveProfilePreferences() {
    const sig = document.getElementById('profile-sig-name').value;
    state.currentUser.name = sig;
    document.getElementById('user-name').innerText = sig;
    addAuditLog(state.currentUser.username, `Updated active profile config signature: "${sig}"`);
    triggerToast("Chamber configs updated successfully.", "success");
    closeProfileModal();
}

function toggleQuickActions() {
    const menu = document.getElementById('quick-actions-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Dashboard Filters
function filterQueueTable() {
    renderQueueTable();
}

function renderQueueTable() {
    const tbody = document.getElementById('queue-tbody');
    const searchVal = document.getElementById('queue-search').value.toLowerCase();
    const priorityVal = document.getElementById('queue-priority-filter').value;
    
    tbody.innerHTML = '';
    
    // Sort tasks so Urgent tasks are at the top
    const priorityMap = { Urgent: 4, High: 3, Medium: 2, Low: 1 };
    const sortedTasks = [...state.tasks].sort((a, b) => priorityMap[b.priority] - priorityMap[a.priority]);
    
    const filtered = sortedTasks.filter(t => {
        const matchesSearch = t.title.toLowerCase().includes(searchVal) || t.desc.toLowerCase().includes(searchVal);
        const matchesPriority = priorityVal === '' || t.priority === priorityVal;
        return matchesSearch && matchesPriority;
    });
    
    filtered.forEach(t => {
        let badgeColor = 'badge-info';
        if (t.priority === 'High') badgeColor = 'badge-warning';
        if (t.priority === 'Urgent') badgeColor = 'badge-danger';
        
        tbody.innerHTML += `
            <tr>
                <td><span class="badge ${badgeColor}">${t.priority}</span></td>
                <td><strong>Tata Sons Ltd.</strong></td>
                <td>${t.title}</td>
                <td>Adv. Pallavi Shroff</td>
                <td>${t.date}</td>
                <td><strong class="badge badge-info" style="text-transform:uppercase;">${t.status}</strong></td>
                <td>
                    <button class="btn btn-outline btn-sm btn-circle" onclick="switchView('kanban')" title="Open Kanban Workflow"><i data-lucide="arrow-right"></i></button>
                </td>
            </tr>
        `;
    });
    
    lucide.createIcons();
}

// Set up Schedule Roster on Dashboard
function renderDashboardEvents() {
    const container = document.getElementById('dashboard-events-list');
    container.innerHTML = '';
    
    const upcoming = state.consultations.filter(c => c.status === 'Upcoming');
    if (upcoming.length === 0) {
        container.innerHTML = '<p style="font-size:12px; color:var(--text-muted); text-align:center;">No dockets today.</p>';
        return;
    }
    
    upcoming.slice(0, 3).forEach(u => {
        container.innerHTML += `
            <div style="border-left:3px solid var(--primary); background-color:var(--bg-workspace); padding:8px 12px; border-radius: 4px; font-size:12.5px;">
                <div style="display:flex; justify-content:space-between; font-weight:600;">
                    <span>${u.time} - Call</span>
                    <span style="font-size:10px; color:var(--primary); font-weight:700;">VIDEO</span>
                </div>
                <div style="color:var(--text-primary); margin-top:2px;">${u.clientName}</div>
                <div style="font-size:11px; color:var(--text-muted); margin-top:1px;">Lawyer: ${u.lawyer}</div>
            </div>
        `;
    });
}
renderDashboardEvents();
