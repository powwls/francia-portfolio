// Reveal page elements again whenever they enter the viewport while scrolling.
const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

// Filter the skills panels without changing the surrounding section layout.
const skillFilterButtons = document.querySelectorAll('[data-skill-filter]');
const skillCategories = document.querySelectorAll('[data-skill-category]');

skillFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.skillFilter;

    skillFilterButtons.forEach((filterButton) => {
      filterButton.classList.toggle('is-active', filterButton === button);
    });

    skillCategories.forEach((category) => {
      const shouldShow = selectedCategory === 'all' || category.dataset.skillCategory === selectedCategory;
      category.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Portfolio project carousel controls.
const projectCarousel = document.querySelector('.project-carousel');
const projectTrack = projectCarousel.querySelector('.project-grid');
const projectCards = projectCarousel.querySelectorAll('.project-card');
const previousProjectButton = projectCarousel.querySelector('.carousel-prev');
const nextProjectButton = projectCarousel.querySelector('.carousel-next');
let projectIndex = 0;

const getProjectsPerView = () => {
  if (window.matchMedia('(max-width: 767px)').matches) return 1;
  if (window.matchMedia('(max-width: 1024px)').matches) return 2;
  return 3;
};

const updateProjectCarousel = () => {
  const projectsPerView = getProjectsPerView();
  const maxIndex = Math.max(0, projectCards.length - projectsPerView);
  projectIndex = Math.min(projectIndex, maxIndex);
  const cardWidth = projectCards[0].getBoundingClientRect().width;
  const gap = Number.parseFloat(getComputedStyle(projectTrack).gap) || 0;

  projectTrack.style.transform = `translateX(-${projectIndex * (cardWidth + gap)}px)`;
  previousProjectButton.disabled = projectIndex === 0;
  nextProjectButton.disabled = projectIndex === maxIndex;
};

previousProjectButton.addEventListener('click', () => {
  projectIndex -= 1;
  updateProjectCarousel();
});

nextProjectButton.addEventListener('click', () => {
  projectIndex += 1;
  updateProjectCarousel();
});

window.addEventListener('resize', updateProjectCarousel);
updateProjectCarousel();

// Certification carousel controls.
const certificationsCarousel = document.querySelector('.certifications-carousel');
const certificationsTrack = certificationsCarousel.querySelector('.certifications-grid');
const certificationCards = certificationsCarousel.querySelectorAll('.certification-card');
const previousCertificationButton = certificationsCarousel.querySelector('.carousel-prev');
const nextCertificationButton = certificationsCarousel.querySelector('.carousel-next');
let certificationIndex = 0;

const getCertificationsPerView = () => {
  if (window.matchMedia('(max-width: 767px)').matches) return 1;
  if (window.matchMedia('(max-width: 1024px)').matches) return 2;
  return 3;
};

const updateCertificationsCarousel = () => {
  const certificationsPerView = getCertificationsPerView();
  const maxIndex = Math.max(0, certificationCards.length - certificationsPerView);
  certificationIndex = Math.min(certificationIndex, maxIndex);
  const cardWidth = certificationCards[0].getBoundingClientRect().width;
  const gap = Number.parseFloat(getComputedStyle(certificationsTrack).gap) || 0;

  certificationsTrack.style.transform = `translateX(-${certificationIndex * (cardWidth + gap)}px)`;
  previousCertificationButton.disabled = certificationIndex === 0;
  nextCertificationButton.disabled = certificationIndex === maxIndex;
};

previousCertificationButton.addEventListener('click', () => {
  certificationIndex -= 1;
  updateCertificationsCarousel();
});

nextCertificationButton.addEventListener('click', () => {
  certificationIndex += 1;
  updateCertificationsCarousel();
});

window.addEventListener('resize', updateCertificationsCarousel);
updateCertificationsCarousel();

// Project and certificate modal elements.
const capstoneCard = document.querySelector('.capstone-card');
const capstoneModal = document.getElementById('capstone-modal');
const modalCloseButtons = document.querySelectorAll('[data-close-modal]');
const cuppaGalleryTrack = document.querySelector('.cuppa-gallery-track');
const cuppaGalleryImages = document.querySelectorAll('.cuppa-gallery-image');
const previousCuppaGalleryButton = document.querySelector('.cuppa-gallery-prev');
const nextCuppaGalleryButton = document.querySelector('.cuppa-gallery-next');
let cuppaGalleryIndex = 0;
const purrfectGalleryTrack = document.querySelector('.purrfect-gallery-track');
const purrfectGalleryImages = document.querySelectorAll('.purrfect-gallery-image');
const previousPurrfectGalleryButton = document.querySelector('.purrfect-gallery-prev');
const nextPurrfectGalleryButton = document.querySelector('.purrfect-gallery-next');
let purrfectGalleryIndex = 0;
const snoopyGalleryTrack = document.querySelector('.snoopy-gallery-track');
const snoopyGalleryImages = document.querySelectorAll('.snoopy-gallery-image');
const previousSnoopyGalleryButton = document.querySelector('.snoopy-gallery-prev');
const nextSnoopyGalleryButton = document.querySelector('.snoopy-gallery-next');
let snoopyGalleryIndex = 0;
const brewsGalleryTrack = document.querySelector('.brews-gallery-track');
const brewsGalleryImages = document.querySelectorAll('.brews-gallery-track img');
const previousBrewsGalleryButton = document.querySelector('.brews-gallery-prev');
const nextBrewsGalleryButton = document.querySelector('.brews-gallery-next');
let brewsGalleryIndex = 0;
const certificateModal = document.getElementById('certificate-modal');
const certificateModalImage = certificateModal.querySelector('.certificate-modal-image');
const certificateCards = document.querySelectorAll('[data-certificate]');
const awardImage = document.querySelector('[data-award-image]');
const galleryTrack = document.querySelector('.gallery-track');
const galleryImages = document.querySelectorAll('.gallery-image');
const previousGalleryButton = document.querySelector('.gallery-prev');
const nextGalleryButton = document.querySelector('.gallery-next');
let galleryIndex = 0;

const updateGallery = () => {
  galleryTrack.style.transform = `translateX(-${galleryIndex * 100}%)`;
  previousGalleryButton.disabled = galleryIndex === 0;
  nextGalleryButton.disabled = galleryIndex === galleryImages.length - 1;
};

const updateBrewsGallery = () => {
  brewsGalleryTrack.style.transform = `translateX(-${brewsGalleryIndex * 100}%)`;
  previousBrewsGalleryButton.disabled = brewsGalleryIndex === 0;
  nextBrewsGalleryButton.disabled = brewsGalleryIndex === brewsGalleryImages.length - 1;
};

const updateCuppaGallery = () => {
  cuppaGalleryTrack.style.transform = `translateX(-${cuppaGalleryIndex * 100}%)`;
  previousCuppaGalleryButton.disabled = cuppaGalleryIndex === 0;
  nextCuppaGalleryButton.disabled = cuppaGalleryIndex === cuppaGalleryImages.length - 1;
};

const updatePurrfectGallery = () => {
  purrfectGalleryTrack.style.transform = `translateX(-${purrfectGalleryIndex * 100}%)`;
  previousPurrfectGalleryButton.disabled = purrfectGalleryIndex === 0;
  nextPurrfectGalleryButton.disabled = purrfectGalleryIndex === purrfectGalleryImages.length - 1;
};

const updateSnoopyGallery = () => {
  snoopyGalleryTrack.style.transform = `translateX(-${snoopyGalleryIndex * 100}%)`;
  previousSnoopyGalleryButton.disabled = snoopyGalleryIndex === 0;
  nextSnoopyGalleryButton.disabled = snoopyGalleryIndex === snoopyGalleryImages.length - 1;
};

previousGalleryButton.addEventListener('click', () => {
  galleryIndex = Math.max(0, galleryIndex - 1);
  updateGallery();
});

nextGalleryButton.addEventListener('click', () => {
  galleryIndex = Math.min(galleryImages.length - 1, galleryIndex + 1);
  updateGallery();
});

updateGallery();
updateBrewsGallery();
updateCuppaGallery();
updatePurrfectGallery();
updateSnoopyGallery();

previousBrewsGalleryButton.addEventListener('click', () => {
  brewsGalleryIndex = Math.max(0, brewsGalleryIndex - 1);
  updateBrewsGallery();
});

nextBrewsGalleryButton.addEventListener('click', () => {
  brewsGalleryIndex = Math.min(brewsGalleryImages.length - 1, brewsGalleryIndex + 1);
  updateBrewsGallery();
});

previousCuppaGalleryButton.addEventListener('click', () => {
  cuppaGalleryIndex = Math.max(0, cuppaGalleryIndex - 1);
  updateCuppaGallery();
});

nextCuppaGalleryButton.addEventListener('click', () => {
  cuppaGalleryIndex = Math.min(cuppaGalleryImages.length - 1, cuppaGalleryIndex + 1);
  updateCuppaGallery();
});

previousPurrfectGalleryButton.addEventListener('click', () => {
  purrfectGalleryIndex = Math.max(0, purrfectGalleryIndex - 1);
  updatePurrfectGallery();
});

nextPurrfectGalleryButton.addEventListener('click', () => {
  purrfectGalleryIndex = Math.min(purrfectGalleryImages.length - 1, purrfectGalleryIndex + 1);
  updatePurrfectGallery();
});

previousSnoopyGalleryButton.addEventListener('click', () => {
  snoopyGalleryIndex = Math.max(0, snoopyGalleryIndex - 1);
  updateSnoopyGallery();
});

nextSnoopyGalleryButton.addEventListener('click', () => {
  snoopyGalleryIndex = Math.min(snoopyGalleryImages.length - 1, snoopyGalleryIndex + 1);
  updateSnoopyGallery();
});

const closeCapstoneModal = () => {
  capstoneModal.hidden = true;
  document.body.classList.remove('modal-open');
};

modalCloseButtons.forEach((button) => {
  button.addEventListener('click', closeCapstoneModal);
});

const closeCertificateModal = () => {
  certificateModal.hidden = true;
  document.body.classList.remove('modal-open');
  certificateModalImage.removeAttribute('src');
};

// Open the certificate image modal when a certification card is selected.
const showCertificate = (card) => {
    certificateModalImage.src = card.dataset.certificate;
    certificateModalImage.alt = `${card.dataset.certificateTitle} certificate`;
    certificateModal.hidden = false;
    document.body.classList.add('modal-open');
};

const showAwardImage = () => {
  certificateModalImage.src = awardImage.dataset.awardImage;
  certificateModalImage.alt = 'RDC-QC Research Conference 2025 recognition for TOMATOWISE';
  certificateModal.hidden = false;
  document.body.classList.add('modal-open');
};

const showGalleryImage = (image) => {
  certificateModalImage.src = image.dataset.image;
  certificateModalImage.alt = image.dataset.imageTitle;
  certificateModal.hidden = false;
  document.body.classList.add('modal-open');
};

galleryImages.forEach((image) => {
  image.addEventListener('click', () => showGalleryImage(image));
});

const projectGalleryImages = document.querySelectorAll(
  '.project-gallery-image, .brews-gallery-image, .cuppa-gallery-image'
);

projectGalleryImages.forEach((image) => {
  image.addEventListener('click', () => showGalleryImage(image));
  image.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showGalleryImage(image);
    }
  });
});

awardImage.addEventListener('click', showAwardImage);

certificateCards.forEach((card) => {
  card.addEventListener('click', () => showCertificate(card));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showCertificate(card);
    }
  });
});

document.querySelectorAll('.credential-link').forEach((link) => {
  link.addEventListener('click', (event) => event.stopPropagation());
});

certificateModal.querySelectorAll('[data-close-certificate-modal]').forEach((button) => {
  button.addEventListener('click', closeCertificateModal);
});

// Close either modal with the Escape key.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !capstoneModal.hidden) {
    closeCapstoneModal();
  }

  if (event.key === 'Escape' && !certificateModal.hidden) {
    closeCertificateModal();
  }

});
