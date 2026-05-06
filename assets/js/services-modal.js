'use strict';

const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

document.querySelectorAll('.service-card[data-description]').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', (e) => {
    e.stopPropagation();
    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.description;
    modal.classList.add('modal--open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

document.addEventListener('click', () => {
  modal.classList.remove('modal--open');
  modal.setAttribute('aria-hidden', 'true');
});

document.querySelector('.modal-box').addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('modal--open');
    modal.setAttribute('aria-hidden', 'true');
  }
});
