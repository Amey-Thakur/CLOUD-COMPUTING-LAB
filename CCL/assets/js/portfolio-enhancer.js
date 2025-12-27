(function () {
    // 1. Define Experiment Data
    const repoBase = "https://github.com/Amey-Thakur/CLOUD-COMPUTING-LAB/tree/main/CCL/";
    const experiments = {
        "Amey": {
            id: "05",
            title: "Portfolio - Amey Thakur",
            date: "February 2022",
            stack: ["GSAP", "HTML5", "CSS3", "AWS S3"],
            desc: "A responsive professional landing page showcasing modern animation techniques with GSAP. Deployed as a static website on AWS S3, demonstrating PaaS concepts.",
            path: "Amey/index.html"
        },
        "Mega": {
            id: "05",
            title: "Portfolio - Mega Satish",
            date: "February 2022",
            stack: ["HTML5", "CSS3", "Responsive", "AWS S3"],
            desc: "A sleek, responsive student portfolio designed for high performance and visual clarity. Deployed as a static website on AWS S3, demonstrating PaaS concepts.",
            path: "Mega/index.html"
        }
    };

    // 2. Detect Current Portfolio
    let currentKey = null;
    const path = window.location.pathname;

    if (path.toLowerCase().includes("/amey/")) currentKey = "Amey";
    else if (path.toLowerCase().includes("/mega/")) currentKey = "Mega";

    if (!currentKey) return;

    const currentExp = experiments[currentKey];

    // 3. Inject CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .enhancer-btn {
            position: fixed !important;
            bottom: 80px !important;
            right: 20px !important;
            width: 50px !important;
            height: 50px !important;
            background: #ffffff !important;
            color: #2563eb !important;
            border-radius: 50% !important;
            border: 2px solid #2563eb !important;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
            z-index: 2147483647 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 24px !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            font-family: sans-serif !important;
        }
        .enhancer-btn:hover {
            background: #2563eb !important;
            color: white !important;
            transform: scale(1.1) !important;
        }
        .enhancer-modal-overlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: rgba(0,0,0,0.6) !important;
            z-index: 2147483647 !important;
            display: none !important;
            justify-content: center !important;
            align-items: center !important;
            backdrop-filter: blur(3px) !important;
            opacity: 0 !important;
            transition: opacity 0.3s ease !important;
        }
        .enhancer-modal-overlay.active {
            display: flex !important;
            opacity: 1 !important;
        }
        .enhancer-modal {
            background: white !important;
            width: 90% !important;
            max-width: 500px !important;
            padding: 30px !important;
            border-radius: 16px !important;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
            position: relative !important;
            transform: translateY(20px) !important;
            transition: transform 0.3s ease !important;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
            text-align: left !important;
            color: #333 !important;
        }
        .enhancer-modal-overlay.active .enhancer-modal {
            transform: translateY(0) !important;
        }
        .enhancer-close {
            position: absolute !important;
            top: 15px !important;
            right: 20px !important;
            font-size: 24px !important;
            cursor: pointer !important;
            color: #999 !important;
        }
        .enhancer-close:hover { color: #333 !important; }
        .enhancer-title {
            margin: 0 0 10px 0 !important;
            font-size: 24px !important;
            font-weight: bold !important;
            color: #1e293b !important;
        }
        .enhancer-meta {
            font-size: 14px !important;
            color: #64748b !important;
            margin-bottom: 20px !important;
        }
        .enhancer-desc {
            font-size: 16px !important;
            line-height: 1.6 !important;
            margin-bottom: 25px !important;
            color: #475569 !important;
        }
        .enhancer-tags {
            margin-bottom: 25px !important;
        }
        .enhancer-tag {
            display: inline-block !important;
            background: #eff6ff !important;
            color: #2563eb !important;
            padding: 5px 12px !important;
            border-radius: 20px !important;
            font-size: 12px !important;
            margin-right: 8px !important;
            font-weight: 600 !important;
        }
        .enhancer-actions {
            display: flex !important;
            gap: 10px !important;
            margin-top: 20px !important;
        }
        .enhancer-action-btn {
            flex: 1 !important;
            padding: 12px !important;
            border-radius: 8px !important;
            text-align: center !important;
            text-decoration: none !important;
            font-weight: 600 !important;
            font-size: 14px !important;
            transition: background 0.2s !important;
            border: none !important;
            cursor: pointer !important;
        }
        .btn-source {
            background: #1e293b !important;
            color: white !important;
        }
        .btn-source:hover { background: #334155 !important; color: white !important; }
    `;
    document.head.appendChild(style);

    // 4. Inject HTML Elements
    const btn = document.createElement('div');
    btn.className = 'enhancer-btn';
    btn.innerHTML = 'ℹ️';
    btn.title = "Technological Details";
    document.body.appendChild(btn);

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'enhancer-modal-overlay';
    modalOverlay.innerHTML = `
        <div class="enhancer-modal">
            <div class="enhancer-close">&times;</div>
            <h2 class="enhancer-title">Exp ${currentExp.id}: ${currentExp.title}</h2>
            <div class="enhancer-meta">
                <span>📅 ${currentExp.date}</span>
            </div>
            <p class="enhancer-desc">${currentExp.desc}</p>
            <div class="enhancer-tags">
                ${currentExp.stack.map(tech => `<span class="enhancer-tag">${tech}</span>`).join('')}
            </div>
            <div class="enhancer-actions">
                <a href="${repoBase}${currentExp.path}" target="_blank" class="enhancer-action-btn btn-source">
                    View Source Code
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(modalOverlay);

    // 5. Event Listeners
    btn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
    });

    const closeBtn = modalOverlay.querySelector('.enhancer-close');
    closeBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modalOverlay.classList.remove('active');
        }
    });
})();
