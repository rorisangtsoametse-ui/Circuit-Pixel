

// Navigation redirects with smooth transitions
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            // Internal page anchor
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else if (href.endsWith('.html')) {
            // Page redirect with loading effect
            e.preventDefault();
            // Add loading class to body
            document.body.classList.add('page-loading');
            // Redirect after short delay for visual effect
            setTimeout(() => {
                window.location.href = href;
            }, 200);
        }
        // External links (WhatsApp, Facebook, etc.) work normally
    });
});

// Add hover animations to service cards
document.querySelectorAll('.service-card, .gallery-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Pulsing animation for WhatsApp buttons
document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    setInterval(() => {
        btn.style.boxShadow = '0 0 20px rgba(37, 211, 102, 0.8)';
        setTimeout(() => {
            btn.style.boxShadow = '';
        }, 1000);
    }, 3000);
});

// Load images from work folder
function loadWorkGallery() {
    const galleryGrid = document.getElementById('work-gallery');
    if (!galleryGrid) return;

    // Load actual images from work folder
    const workImages = [
        'work/1.jpeg',
        'work/2.jpeg',
        'work/3.jpeg',
        'work/4.jpeg',
        'work/5.jpeg'
    ];

    workImages.forEach((src, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${src}" alt="Repair Work ${index + 1}" loading="lazy">
            <p>Our repair work - <a href="https://wa.me/26669473506" class="btn whatsapp-btn">Need Similar Service?</a></p>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

loadWorkGallery();

// Floating WhatsApp button animation
const whatsappFloat = document.getElementById('whatsapp-float');
if (whatsappFloat) {
    setInterval(() => {
        whatsappFloat.style.transform = 'scale(1.1)';
        setTimeout(() => {
            whatsappFloat.style.transform = 'scale(1)';
        }, 500);
    }, 3000);
}

// Circuit pattern animation (subtle)
function createCircuitPattern() {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 1;

    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    // Draw some random circuit lines
    for (let i = 0; i < 20; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
        drawLine(x1, y1, x2, y2);
    }
}

createCircuitPattern();

// Responsive menu toggle (if needed for mobile)
const nav = document.querySelector('nav ul');
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰';
menuToggle.style.display = 'none';
menuToggle.style.background = 'none';
menuToggle.style.border = 'none';
menuToggle.style.color = 'white';
menuToggle.style.fontSize = '1.5rem';
menuToggle.style.cursor = 'pointer';

document.querySelector('nav').prepend(menuToggle);

function toggleMenu() {
    nav.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu);

if (window.innerWidth <= 768) {
    menuToggle.style.display = 'block';
    nav.style.display = 'none';
    nav.classList.add('mobile-menu');
}

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    .mobile-menu {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        display: none;
    }
    .mobile-menu.active {
        display: flex;
    }
    .mobile-menu li {
        margin: 1rem 0;
    }
`;
document.head.appendChild(style);
