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
