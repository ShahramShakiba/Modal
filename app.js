/*=======================$ MODAL $==========================*/
const showModalBtn = document.querySelector('.show-modal'),
  closeModalBtn = document.querySelector('.close-modal');
backDrop = document.querySelector('.backdrop');
modal = document.querySelector('.modal');

const closeModal = () => {
  backDrop.classList.add('hidden');
  modal.classList.add('hidden');
};

const showModal = () => {
  backDrop.classList.remove('hidden');
  modal.classList.remove('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
backDrop.addEventListener('click', closeModal);
showModalBtn.addEventListener('click', showModal);
