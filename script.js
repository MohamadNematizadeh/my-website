// --------------------
// Mobile Menu Toggle
// --------------------
const burger = document.getElementById('burger');
const mobile = document.getElementById('mobile');

burger.addEventListener('click', () => {
    mobile.classList.toggle('active'); // با CSS کنترل نمایش دهید
});

// CSS پیشنهادی:
/*
#mobile {
  display: none;
  transition: all 0.3s ease;
}
#mobile.active {
  display: block;
}
*/

// --------------------
// Theme Toggle with localStorage
// --------------------
const themeBtn = document.getElementById('theme');
const currentTheme = localStorage.getItem('theme');

if(currentTheme === 'light') {
    document.body.classList.add('light');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if(document.body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.removeItem('theme');
    }
});

// --------------------
// Reveal on Scroll
// --------------------
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

reveals.forEach(r => revealObserver.observe(r));

// --------------------
// Skills Animation
// --------------------
const fills = document.querySelectorAll('.fill');
fills.forEach(f => {
    f.style.transition = 'width 1s ease'; // smooth animation
});

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-w');
        }
    });
}, { threshold: 0.6 });

fills.forEach(f => skillsObserver.observe(f));

// --------------------
// Contact Form
// --------------------
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        alert('پیام شما ارسال شد!');
        this.reset();
    });
}

// --------------------
// Hero Text Typing Animation
// --------------------
const textLines = [
    "سلام 👋 من محمد نعمتی‌زاده هستم",
    "برنامه‌نویس وب | UI/UX | سئو",
];

let currentLine = 0;
let currentChar = 0;
const speed = 50;

function typeLine() {
    if(currentLine >= textLines.length) return;

    const line = textLines[currentLine];
    const heroText = document.getElementById("heroText");
    if(!heroText) return;

    if(currentChar < line.length){
        heroText.innerHTML += line.charAt(currentChar);
        currentChar++;
        setTimeout(typeLine, speed);
    } else {
        heroText.innerHTML += "<br>";
        currentLine++;
        currentChar = 0;
        setTimeout(typeLine, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeLine);

// --------------------
// Lottie Animations
// --------------------
document.addEventListener("DOMContentLoaded", () => {
    const lottieAnimations = [
        {id:'lottie-web', path:'WebsiteDesignAnimation.json'},
        {id:'lottie-uiux', path:'WebDesigning.json'},
        {id:'lottie-seo', path:'SeoAnalyticsTeam.json'}
    ];

    lottieAnimations.forEach(anim => {
        const container = document.getElementById(anim.id);
        if(container){
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
