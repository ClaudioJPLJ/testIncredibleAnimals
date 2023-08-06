export default class MenuMobile {
  constructor(menuButton, menuElements) {
    this.receiveMenuClick = document.querySelector(menuButton);
    this.receiveMenu = document.querySelector(menuElements);
    this.menuClicked = this.menuClicked.bind(this);
  }

  menuClicked() {
    [this.receiveMenu, this.receiveMenuClick].forEach((element) => {
      element.classList.toggle('active');
    });
  }

  init() {
    if (this.receiveMenuClick && this.receiveMenu) {
      ['click', 'touchstart'].forEach(eventListener => {
        this.receiveMenuClick.addEventListener(eventListener, this.menuClicked);
      });
    }
    return this;
  }
}
