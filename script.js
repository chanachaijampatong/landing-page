const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.site-header');
const contactForm = document.querySelector('.contact-form');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('i').className = 'fa-solid fa-bars';
  });
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = contactForm.querySelector('.form-message');
  message.textContent = 'ขอบคุณครับ เราจะติดต่อกลับโดยเร็วที่สุด';
  contactForm.reset();
});