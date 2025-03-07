var modal = document.querySelector('.modal-overlay');
var modalImg = document.getElementById('full-image');
var images = document.querySelectorAll('.img-container img');
var closeBtn = document.querySelector('.close');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var currentIndex = 0;

function openModal(event) {
  currentIndex = Array.from(images).indexOf(event.target);
  updateModalImage();
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

function updateModalImage() {
  modalImg.src = images[currentIndex].src;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateModalImage();
}
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateModalImage();
}

images.forEach((img) => img.addEventListener('click', openModal));
closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') closeModal();
  if (event.key === 'ArrowRight') nextImage();
  if (event.key === 'ArrowLeft') prevImage();
});

modal.addEventListener('click', function (event) {
  if (event.target === modal) closeModal();
});
