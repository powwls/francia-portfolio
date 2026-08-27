const images = [...document.querySelectorAll('.detail-image')];
const imageModal = document.getElementById('image-modal');
const modalImage = imageModal.querySelector('.image-modal-image');
const closeModalButton = imageModal.querySelector('.modal-close');
const closeImageModal = () => {
  imageModal.hidden = true;
  document.body.classList.remove('modal-open');
  modalImage.removeAttribute('src');
};

const openImageModal = (image) => {
  modalImage.src = image.src;
  modalImage.alt = image.alt;
  imageModal.hidden = false;
  document.body.classList.add('modal-open');
  closeModalButton.focus();
};

images.forEach((image) => {
  image.addEventListener('click', () => openImageModal(image));
  image.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openImageModal(image);
    }
  });
});

imageModal.querySelector('[data-close-image-modal]').addEventListener('click', closeImageModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !imageModal.hidden) closeImageModal();
});

