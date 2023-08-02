export default class DropdownMenu {
  constructor(menuParent) {
    this.menuParent = document.querySelectorAll(menuParent);
    this.handleClick = this.handleClick.bind(this);
    this.defaultEvents = ['touchstart', 'click'];
  }

  handleClick(ev) {
    ev.preventDefault();
    this.compareElement = ev.currentTarget;
    if (!this.compareElement.classList.contains('ativo')) {
      this.outsideClick(this.defaultEvents);
    }
    ev.currentTarget.classList.add('ativo');
  }

  outsideClick(events) {
    const bodyElement = document.body;
    const handleOutsideClick = (ev) => {
      if (!this.compareElement.contains(ev.target)) {
        this.compareElement.classList.remove('ativo');
        events.forEach(event => {
          bodyElement.removeEventListener(event, handleOutsideClick);
        });
      }
    };

    events.forEach(event => {
      bodyElement.addEventListener(event, handleOutsideClick);
    });
  }

  addEvents() {
    this.menuParent.forEach(el => {
      this.defaultEvents.forEach(event => {
        el.addEventListener(event, this.handleClick);
      });
    });
  }

  init() {
    this.menuParent ? this.addEvents() : null;
    return this;
  }
}
