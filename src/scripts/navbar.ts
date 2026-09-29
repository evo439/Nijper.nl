const navbar = document.querySelector<HTMLElement>('.navbar');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Mobile menu toggle
const hamburger = document.querySelector<HTMLButtonElement>('.hamburger');
const navLinks = document.querySelector<HTMLElement>('.nav-links');

if (hamburger && navLinks) {
  const setOpen = (open: boolean) => {
    hamburger.classList.toggle('active', open);
    navLinks.classList.toggle('active', open);
    document.body.classList.toggle('no-scroll', open);
    hamburger.setAttribute('aria-expanded', String(open));
  };

  hamburger.addEventListener('click', () => setOpen(!navLinks.classList.contains('active')));

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
}
