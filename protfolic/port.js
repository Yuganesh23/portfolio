// ------------------------
// Load EmailJS first (global init)
// ------------------------
emailjs.init("1L8kuZE_HGZ-l9X7H");

// ------------------------
// Toggle menu icon and navbar
// ------------------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
});

// ------------------------
// Scroll sections active link + Sticky header
// ------------------------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close navbar on scroll
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
});

// ------------------------
// EmailJS - Contact Form
// ------------------------
function sendMail() {
    const param = {
        name: document.querySelector('#sendername').value,
        email: document.querySelector('#replyto').value,
        phone: document.querySelector('#to').value,
        message: document.querySelector('#message').value
    };

    emailjs.send("service_wo11rkn", "template_dftn681", param)
        .then(res => {
            alert("✅ Message sent successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch(err => {
            alert("❌ Failed to send message.");
            console.error("EmailJS Error:", err);
        });
}

// ------------------------
// AOS Initialization
// ------------------------
AOS.init();
