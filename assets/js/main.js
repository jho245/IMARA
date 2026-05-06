'use strict';

// Hamburger-Menü für Mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
    const expanded = navMenu.classList.contains('is-open');
    navToggle.setAttribute('aria-expanded', expanded);
  });
}

// Aktiven Nav-Link hervorheben
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.setAttribute('aria-current', 'page');
  }
});
