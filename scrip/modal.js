/* eslint-disable no-unused-expressions */
export default function modalFunction() {
  const receiveOpenButton = document.querySelector('[data-modal="openModal"]');
  const receiveModalContainer = document.querySelector('[data-modal="modalContainer"]');
  const receiveCloseModalButton = document.querySelector('button[data-modal="fechar"]');
  const isActiveModal = (event) => {
    event.preventDefault();
    receiveModalContainer.classList.toggle('active');
  };

  if (receiveOpenButton && receiveModalContainer && receiveCloseModalButton) {
    receiveOpenButton.addEventListener('click', isActiveModal);
    receiveCloseModalButton.addEventListener('click', isActiveModal);
    receiveModalContainer.addEventListener('click', (event) => {
      event.target === receiveModalContainer ? receiveModalContainer.classList.remove('active') : null;
    });
  }
}
