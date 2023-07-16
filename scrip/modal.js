export default class ModalFunction {
  constructor(openButton, modalContainer, closeModalButton) {
    this.openButton = document.querySelector(openButton);
    this.modalContainer = document.querySelector(modalContainer);
    this.closeModalButton = document.querySelector(closeModalButton);
  }

  addEvents() {
    const { openButton } = this;
    const { closeModalButton } = this;
    const { modalContainer } = this;
    [openButton, closeModalButton].forEach(el => el.addEventListener('click', (ev) => {
      ev.preventDefault();
      modalContainer.classList.toggle('active');
    }));
    modalContainer.addEventListener('click', (ev) => {
      ev.target === modalContainer ? modalContainer.classList.remove('active') : null;
    });
  }

  init() {
    this.openButton && this.modalContainer && this.closeModalButton ? this.addEvents() : null;
    return this;
  }
}
