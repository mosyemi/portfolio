// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Matrix Rain Effect
const canvas = document.getElementById('matrixCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * -100;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });
}

// Call counter animation
if (document.querySelector('.counter')) {
    animateCounters();
}

// Floating Binary Particles
function createBinaryParticles() {
    const container = document.getElementById('floatingBinary');
    if (!container) return;

    const particleCount = 20;
    const binaryChars = ['0', '1', '01', '10', '001', '101', '010', '110'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'binary-particle';
        particle.textContent = binaryChars[Math.floor(Math.random() * binaryChars.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

// Create binary particles on page load
if (document.getElementById('floatingBinary')) {
    createBinaryParticles();
}

// Glitch Effect on Hover
document.querySelectorAll('.glitch').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.animation = 'glitch-skew 0.3s ease';
    });
    
    element.addEventListener('animationend', () => {
        element.style.animation = '';
    });
});

// Terminal Typing Effect (if on home page)
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 1000);
}

// Add hover effect to cyber buttons
document.querySelectorAll('.cyber-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Random binary code generation for background
function generateRandomBinary() {
    let binary = '';
    for (let i = 0; i < 8; i++) {
        binary += Math.random() > 0.5 ? '1' : '0';
    }
    return binary;
}

// Update binary codes periodically
setInterval(() => {
    const binaryElements = document.querySelectorAll('.binary-ring span');
    binaryElements.forEach(el => {
        el.textContent = generateRandomBinary();
    });
}, 3000);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add cyber glow effect on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const nav = document.querySelector('nav');
    
    if (nav) {
        if (currentScroll > lastScroll) {
            nav.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.8)';
        } else {
            nav.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.5)';
        }
    }
    
    lastScroll = currentScroll;
});

// Console Easter Egg
console.log('%c🔐 SYSTEM ACCESS GRANTED 🔐', 'color: #00ff41; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ff41;');
console.log('%cWelcome to Collins Mosyemi\'s Portfolio', 'color: #00ff41; font-size: 14px;');
console.log('%c> root@collinsmosyemi:~$ whoami', 'color: #00ffff; font-size: 12px;');
console.log('%cFull-Stack Developer | Cybersecurity Expert | AI Enthusiast', 'color: #00ff41; font-size: 12px;');
console.log('%c> Interested in the code? Check out my GitHub!', 'color: #ffff00; font-size: 12px;');

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for quick navigation
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const nav = document.getElementById('navLinks');
        if (nav) {
            nav.classList.toggle('active');
        }
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
        }
    }
});

// Add scan line animation to images
document.querySelectorAll('.profile-circle img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.filter = 'brightness(1.1) contrast(1.2) saturate(1.1)';
    });
});

// Performance monitoring (console output)
if (performance && performance.getEntriesByType) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                console.log('%c⚡ SYSTEM PERFORMANCE ⚡', 'color: #00ff41; font-size: 16px; font-weight: bold;');
                console.log(`%cLoad Time: ${(perfData.loadEventEnd - perfData.fetchStart).toFixed(2)}ms`, 'color: #00ff41;');
                console.log(`%cDNS Lookup: ${(perfData.domainLookupEnd - perfData.domainLookupStart).toFixed(2)}ms`, 'color: #00ff41;');
                console.log(`%cServer Response: ${(perfData.responseEnd - perfData.requestStart).toFixed(2)}ms`, 'color: #00ff41;');
            }
        }, 0);
    });
}