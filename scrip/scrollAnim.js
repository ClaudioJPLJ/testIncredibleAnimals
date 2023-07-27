import debounce from './debounce.js';

export default class ScrollAnim {
  constructor(targetElements) {
    this.targetElements = document.querySelectorAll(targetElements);
    this.activationHeight = window.innerHeight * 0.81;
    this.distanceComparation = debounce(this.distanceComparation.bind(this), 100);
  }

  getElementsDistance() {
    this.elementsDistance = [...this.targetElements].map(element => ({
      element, offset: element.offsetTop
    })); // return the element and your offsetTop
  }

  distanceComparation() {
    console.log('exec');
    const activationHeight = this.activationHeight + window.scrollY;
    this.elementsDistance.forEach(item => {
      if (item.offset <= activationHeight) {
        item.element.classList.add('ativo');
      }
    });
  }

  init() {
    this.getElementsDistance();
    this.distanceComparation(); // if the element is already visible
    this.targetElements ? window.addEventListener('scroll', this.distanceComparation) : null;
    return this;
  }
}
