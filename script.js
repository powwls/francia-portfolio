const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

document.getElementById('year').textContent = new Date().getFullYear();

const capstoneCard = document.querySelector('.capstone-card');
const capstoneModal = document.getElementById('capstone-modal');
const modalCloseButtons = document.querySelectorAll('[data-close-modal]');

const closeCapstoneModal = () => {
  capstoneModal.hidden = true;
  document.body.classList.remove('modal-open');
};

capstoneCard.addEventListener('click', () => {
  capstoneModal.hidden = false;
  document.body.classList.add('modal-open');
});

modalCloseButtons.forEach((button) => {
  button.addEventListener('click', closeCapstoneModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !capstoneModal.hidden) {
    closeCapstoneModal();
  }
});
