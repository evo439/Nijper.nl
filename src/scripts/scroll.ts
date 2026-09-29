// Smooth scroll for in-page anchor links, offset by the fixed navbar
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const navHeight = document.querySelector<HTMLElement>('.navbar')?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Rotate hero background on scroll
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-deg', `${window.scrollY * 0.15}deg`);
}, { passive: true });
