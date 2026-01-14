/**
 * ================================================================
 *   Cloud Computing Lab (CCL) - Interactive Logic
 * ================================================================
 *   Author: Amey Thakur & Mega Satish
 *   Repository: https://github.com/Amey-Thakur/CLOUD-COMPUTING-LAB
 *   License: MIT License
 * ================================================================
 */

// =========================================
//   CONSOLE EASTER EGG 🥚
// =========================================
console.log(
    "%c🚀 Cloud Computing Lab Portfolio",
    "font-size: 28px; font-weight: bold; color: #2563eb; text-shadow: 2px 2px 0 #0f172a;"
);
console.log(
    "%c☁️ Exploring the Serverless Clouds?",
    "font-size: 14px; color: #64748b;"
);
console.log(
    "%c🌐 https://github.com/Amey-Thakur/CLOUD-COMPUTING-LAB",
    "font-size: 12px; color: #2563eb;"
);
console.log(
    "%c🛡️ This portfolio is protected. Please respect the author's work!",
    "font-size: 12px; color: #f59e0b; font-weight: bold;"
);

// =========================================
//   SECURITY FEATURES 🔒
// =========================================

// 1. Disable Right Click (Context Menu)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}, false);

// 2. Disable Text Selection (Strict)
document.onselectstart = function () {
    return false;
};

// 3. Disable Keyboard Shortcuts (F12, Ctrl+U, etc.)
document.addEventListener('keydown', (e) => {
    // F12 key
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+I/J/C
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+S (Save Page)
    if (e.ctrlKey && (e.key === 'S' || e.keyCode === 83)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+P (Print)
    if (e.ctrlKey && (e.key === 'P' || e.keyCode === 80)) {
        e.preventDefault();
        return false;
    }
}, false);

// 4. Disable Dragging Images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});

// =========================================
//   LOADER CLEANUP
// =========================================
window.addEventListener('load', () => {
    // Remove loader from DOM after animation completes to prevent clicking issues
    setTimeout(() => {
        const loader = document.getElementById('skeleton-loader');
        if (loader) {
            loader.remove();
        }
    }, 1500); // 1.5s matches 1s delay + 0.5s animation
});

// =========================================
//   COMMAND PALETTE LOGIC ⌘
// =========================================
const cmdOverlay = document.getElementById('cmd-overlay');
const cmdInput = document.getElementById('cmd-input');
const cmdResults = document.getElementById('cmd-results');
const kbdHint = document.getElementById('kbd-hint');

// Search Data
const searchItems = [
    { title: 'Home / Hero Section', url: '#home', icon: 'fas fa-home', type: 'Section' },
    { title: 'Pizza Ordering Chatbot (Mini Project)', url: '#mini-project', icon: 'fas fa-robot', type: 'Project' },
    { title: 'CCL Repository', url: 'https://github.com/Amey-Thakur/CLOUD-COMPUTING-LAB', icon: 'fab fa-github', type: 'Link' },
    { title: 'Amey Thakur Profile', url: 'https://github.com/Amey-Thakur', icon: 'fas fa-user-graduate', type: 'Link' },
    { title: 'Mega Satish Profile', url: 'https://github.com/msatmod', icon: 'fas fa-user-graduate', type: 'Link' },
    { title: 'Toggle Theme', action: 'toggleTheme', icon: 'fas fa-adjust', type: 'Action' },
];

// =========================================
//   STATS COUNTER ANIMATION
// =========================================
const stats = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateStats() {
    if (hasAnimated) return;

    const statsContainer = document.querySelector('.stats-container');
    if (!statsContainer) return;

    const sectionTop = statsContainer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 50) {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const suffix = stat.getAttribute('data-suffix') || '';
            const increment = target / 50; // Speed of animation

            let current = 0;
            const updateCount = () => {
                if (current < target) {
                    current = Math.ceil(current + increment);
                    if (current > target) current = target;
                    stat.innerText = current + suffix;
                    setTimeout(updateCount, 30);
                } else {
                    stat.innerText = target + suffix;
                }
            };
            updateCount();
        });
        hasAnimated = true;
    }
}

window.addEventListener('scroll', animateStats);
animateStats(); // Trigger once on load

// =========================================
//   SCROLL REVEAL ANIMATIONS
// =========================================
function reveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Trigger once on load

// =========================================
//   AUTO-HIDE KEYBOARD HINT
// =========================================
setTimeout(() => {
    if (kbdHint) {
        kbdHint.classList.add('hidden');
        // Remove from DOM after transition
        setTimeout(() => kbdHint.remove(), 600);
    }
}, 8000);

// Open/Close Handlers
document.addEventListener('keydown', (e) => {
    // Ignore if typing in input
    if (document.activeElement.tagName === 'INPUT') return;

    // Toggle Theme (Shift + T)
    if (e.key.toLowerCase() === 't' && e.shiftKey) {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) toggleBtn.click();
    }

    // Go Home (Shift + H)
    if (e.key.toLowerCase() === 'h' && e.shiftKey) {
        window.location.href = '#home';
    }

    // Go to Mini Project (Shift + P)
    if (e.key.toLowerCase() === 'p' && e.shiftKey) {
        window.location.href = '#mini-project';
    }

    // Ctrl+K to Open
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openCmd();
    }
    // Esc to Close
    if (e.key === 'Escape') {
        closeCmd();
    }
});

// Click outside to close
if (cmdOverlay) {
    cmdOverlay.addEventListener('click', (e) => {
        if (e.target === cmdOverlay) {
            closeCmd();
        }
    });

    // Filter Logic
    cmdInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = searchItems.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.type.toLowerCase().includes(query)
        );
        renderResults(filtered);
    });
}

function openCmd() {
    if (!cmdOverlay) return;
    cmdOverlay.classList.add('active');
    cmdInput.value = '';
    renderResults(searchItems);
    setTimeout(() => cmdInput.focus(), 100);
}

function closeCmd() {
    if (!cmdOverlay) return;
    cmdOverlay.classList.remove('active');
}

function renderResults(items) {
    if (!cmdResults) return;
    cmdResults.innerHTML = '';

    if (items.length === 0) {
        cmdResults.innerHTML = '<div class="cmd-item" style="cursor:default; color:var(--text-secondary);">No results found</div>';
        return;
    }

    items.forEach(item => {
        const el = document.createElement('div');
        el.className = 'cmd-item';
        el.setAttribute('role', 'button');

        el.addEventListener('click', () => {
            if (item.action === 'toggleTheme') {
                const toggleBtn = document.getElementById('theme-toggle');
                if (toggleBtn) toggleBtn.click();
            } else if (item.url.startsWith('http')) {
                window.open(item.url, '_blank');
            } else {
                window.location.href = item.url;
            }
            closeCmd();
        });

        // Icon
        const iconDiv = document.createElement('div');
        iconDiv.className = 'cmd-item-icon';
        iconDiv.innerHTML = `<i class="${item.icon}"></i>`;

        // Text
        const textDiv = document.createElement('div');
        textDiv.className = 'cmd-item-text';
        textDiv.textContent = item.title;

        // Type Badge
        const typeDiv = document.createElement('div');
        typeDiv.className = 'cmd-item-type';
        typeDiv.textContent = item.type;

        el.appendChild(iconDiv);
        el.appendChild(textDiv);
        el.appendChild(typeDiv);
        cmdResults.appendChild(el);
    });
}
