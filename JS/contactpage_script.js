const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

const colors = [
    "#A3E4D7",
    "#F4D03F",
    "#D6EAF8",
    "#E6B0AA",
    "#D2B4DE",
    "#F5B7B1",
    "#A9CCE3",
    "#F9E79F",
    "#D5F5E3",
    "#FCF3CF",
    "#BB8FCE",
    "#E8DAEF",
    "#AED6F1",
    "#A2D9CE",
    "#FADBD8",
    "#E5E8E8",
    "#F0B27A",
    "#C39BD3",
    "#A9DFBF",
    "#FDEBD0"
]

function createSquare() {
    const section = document.querySelector('section');
    const square = document.createElement('span');

    var size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;

    section.appendChild(square);

    setTimeout(() => {
        square.remove();
    }, 5000);
}

setInterval(createSquare, 150);

function goEmail() {
    window.location.href = "mailto:dorica296@gmail.com";
}

function goLinkedIn() {
    window.open("https://www.linkedin.com/in/ricardo-vincentius-suwandi-77a097309/", "_blank");
}

function goGitHub() {
    window.open("https://github.com/dorica296-a11y", "_blank");
}

function goInstagram() {
    window.open("https://www.instagram.com/ricardovincentius2?igsh=MTMybjlpZ3l3ZTVmaw==", "_blank");
}

const contactForm = document.querySelector(".direct-contact");

contactForm.addEventListener("submit", () => {
    // Clear inputs after submit
    setTimeout(() => {
        contactForm.reset();
    }, 1000);
});