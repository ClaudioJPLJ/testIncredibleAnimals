import handleOutsideClick from './handleOutsideClick.js';
import debounce from './debounce.js';

export default class MenuMobile {
  constructor(menuButton, menuElements, menuContainer) {
    this.receiveMenuClick = document.querySelector(menuButton);
    this.receiveMenu = document.querySelector(menuElements);
    this.usesHandleOutside = this.usesHandleOutside.bind(this);
    this.menuClicked = this.menuClicked.bind(this);
    this.defaultEvents = ['click', 'touchstart'];
    this.activeClass = 'active';
    this.bodyElement = document.body;
    this.menuContainer = document.querySelector(menuContainer);
    this.debounceFunction = debounce(this.menuClicked, 200);
  }

  usesHandleOutside({ target }) {
    // eslint-disable-next-line no-unneeded-ternary
    !handleOutsideClick(target, this.menuContainer) ? this.removeActive() : null;
  }

  removeActive() {
    setTimeout(() => {
      this.defaultEvents.forEach(eventListener => {
        this.bodyElement.removeEventListener(eventListener, this.usesHandleOutside);
      });

      [this.receiveMenu, this.receiveMenuClick].forEach((element) => {
        element.classList.remove(this.activeClass);
      });
    }, 200);
    // uso do timeout para evitar conflito de execução do menuClicked após o removeActive
    // evitando que a classe seja removida e em seguida adicionada
  }

  menuClicked(ev) {
    ev.preventDefault();
    if (!this.receiveMenu.classList.contains(this.activeClass)) {
      this.defaultEvents.forEach(eventListener => {
        this.bodyElement.addEventListener(eventListener, this.usesHandleOutside);
      });

      [this.receiveMenu, this.receiveMenuClick].forEach((element) => {
        element.classList.add(this.activeClass);
      });
    }
  }

  init() {
    if (this.receiveMenuClick && this.receiveMenu) {
      this.defaultEvents.forEach(eventListener => {
        this.receiveMenuClick.addEventListener(eventListener, this.debounceFunction);
      });
    }
    return this;
  }
}
