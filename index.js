// ─── NAV ACTIVE ON SCROLL ───
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('#navmenu a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll('.reveal');
function checkReveal() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('visible');
  });
}
window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);

// ─── CLOSE SIDEBAR ON MOBILE NAV CLICK ───
navLinks.forEach(link => {
  link.addEventListener('click', () => document.getElementById('sidebar').classList.remove('open'));
});