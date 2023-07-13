export default class SmoothScrol {
  constructor(links, options) {
    this.links = links;
    this.options = options;
  }

  addEvent(options = { behavior: 'smooth', block: 'start' }) {
    const necessaryLinks = document.querySelectorAll(this.links);
    necessaryLinks.forEach(el => {
      el.addEventListener('click', (ev) => {
        ev.preventDefault();
        const clickedHref = ev.target.getAttribute('href');
        const targetSection = document.querySelector(clickedHref);
        targetSection.scrollIntoView(options);
      });
    });
  }

  init() {
    if (this.links) {
      this.addEvent(this.options);
    }
  }
}
