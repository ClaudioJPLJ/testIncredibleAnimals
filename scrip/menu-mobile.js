import debounce from './debounce.js';

export default class MenuMobile {
  constructor(menuButton, menuElements) {
    this.receiveMenuClick = document.querySelector(menuButton);
    this.receiveMenu = document.querySelector(menuElements);
    this.menuClicked = this.menuClicked.bind(this);
    this.debounceFunction = debounce(this.menuClicked, 200);
  }

  menuClicked() {
    [this.receiveMenu, this.receiveMenuClick].forEach((element) => {
      element.classList.toggle('active');
    });
  }

  init() {
    if (this.receiveMenuClick && this.receiveMenu) {
      ['click', 'touchstart'].forEach(eventListener => {
        this.receiveMenuClick.addEventListener(eventListener, this.debounceFunction);
      });
    }
    return this;
  }
}
