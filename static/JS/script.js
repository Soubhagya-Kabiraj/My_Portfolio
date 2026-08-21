// ==========================================
// UPDATED: Mobile Three-Dot Navbar
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        // Toggle mobile menu on three-dot click
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close mobile menu when clicking any nav link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });

        // Close menu when clicking outside navbar
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }

    // ==========================================
    // UPDATED: Space Canvas Starfield Effect
    // ==========================================
    const canvas = document.getElementById('space-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const numStars = Math.floor((width * height) / 4000);
        const stars = [];

        const colors = ['#ffffff', '#00d9ff', '#b875ff', '#6c63ff', '#38bdf8'];

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5 + 0.3,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: Math.random(),
                speed: Math.random() * 0.02 + 0.005,
                dir: Math.random() > 0.5 ? 1 : -1
            });
        }

        function drawStars() {
            ctx.clearRect(0, 0, width, height);

            stars.forEach(star => {
                star.alpha += star.speed * star.dir;
                if (star.alpha >= 1) {
                    star.alpha = 1;
                    star.dir = -1;
                } else if (star.alpha <= 0.1) {
                    star.alpha = 0.1;
                    star.dir = 1;
                }

                ctx.save();
                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = star.color;
                ctx.shadowBlur = star.radius > 1 ? 8 : 0;
                ctx.shadowColor = star.color;
                ctx.fill();
                ctx.restore();
            });

            requestAnimationFrame(drawStars);
        }

        drawStars();
    }
});
