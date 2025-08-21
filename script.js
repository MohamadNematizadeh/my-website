
// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
});

// Hamburger Menu Toggle
const burger = document.getElementById('burger');
const mobile = document.getElementById('mobile');
burger.addEventListener('click', () => {
    mobile.classList.toggle('show');
    const icon = burger.querySelector('i');
    icon.setAttribute('data-lucide', mobile.classList.contains('show') ? 'x' : 'menu');
    lucide.createIcons();
});

// Theme Toggle
const themeBtn = document.getElementById('theme');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    document.body.style.background = isDark ? '#1a1a1a' : '#f7f9fb';
    document.body.style.color = isDark ? '#fff' : '#2d3436';
    themeBtn.querySelector('i').setAttribute('data-lucide', isDark ? 'moon' : 'sun');
    lucide.createIcons();
});

// Language Toggle with localStorage
const langBtn = document.getElementById('langBtn');
const langLabel = document.getElementById('langLabel');
let lang = localStorage.getItem('lang') || 'en'; // Default to English
function updateLanguage() {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = lang === 'en' ? el.dataset.en : el.dataset.fa;
    });
    langLabel.textContent = lang === 'en' ? 'EN' : 'FA';
    document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    document.documentElement.setAttribute('lang', lang);
}
langBtn.addEventListener('click', () => {
    lang = lang === 'en' ? 'fa' : 'en';
    localStorage.setItem('lang', lang);
    updateLanguage();
});
updateLanguage();

// Scroll Animations
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// Sticky Header Shrink
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('scrolled', window.scrollY > 50);
});
document.addEventListener("DOMContentLoaded", () => {
    const lottieAnimations = [
        { id: 'lottie-web', path: 'WebsiteDesignAnimation.json' },
        { id: 'lottie-uiux', path: 'WebDesigning.json' },
        { id: 'lottie-seo', path: 'SeoAnalyticsTeam.json' }
    ];

    lottieAnimations.forEach(anim => {
        const container = document.getElementById(anim.id);
        if (container) {
            lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: anim.path
            });
        }
    });
});

