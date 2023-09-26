import handleOutsideClick from './handleOutsideClick.js';

export default class DropdownMenu {
  constructor(menuParent, compareElement) {
    this.menuParent = document.querySelector(menuParent);
    this.compareElement = document.querySelector(compareElement);
    this.handleClick = this.handleClick.bind(this);
    this.usesHandleOutside = this.usesHandleOutside.bind(this);
    this.defaultEvents = ['click', 'touchstart'];
    this.bodyElement = document.body;
  }

  usesHandleOutside(ev) {
    !handleOutsideClick(ev.target, this.compareElement) ? this.removeActive() : null;
  }

  removeActive() {
    // eslint-disable-next-line max-len
    this.defaultEvents.forEach(events => this.bodyElement.removeEventListener(events, this.usesHandleOutside));
    this.menuParent.classList.remove('ativo');
  }

  handleClick(ev) {
    ev.preventDefault();
    if (!this.menuParent.classList.contains('ativo')) {
      setTimeout(() => {
        // eslint-disable-next-line max-len
        this.defaultEvents.forEach(events => this.bodyElement.addEventListener(events, this.usesHandleOutside));
        this.menuParent.classList.add('ativo');
      }, 100);
    }
  }

  addEvents() {
    this.defaultEvents.forEach(event => {
      this.menuParent.addEventListener(event, this.handleClick);
    });
  }

  init() {
    this.menuParent ? this.addEvents() : null;
    return this;
  }
}
