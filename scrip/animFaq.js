export default class AccordionAnimation {
  constructor(eventElements, CSSclasses) {
    this.eventElements = eventElements;
    this.CSSclasses = CSSclasses;
    this.addClassName = {
      handleEvent(event) {
        const convertArray = this.already.join('').split(' '); // convert string of args into an array
        convertArray.forEach(CSSclass => {
          event.target.classList.toggle(CSSclass);
          event.target.nextElementSibling.classList.toggle(CSSclass);
        });
      },
      already: [this.CSSclasses]
    };
  }

  addEvent(eventEl) {
    const eventElements = document.querySelectorAll(eventEl);
    eventElements.forEach(el => {
      el.addEventListener('click', this.addClassName);
    });
  }

  init() {
    const { eventElements } = this;
    eventElements && this.CSSclasses ? this.addEvent(eventElements) : null;
    return this;
  }
}
