export default class ImagesAnim {
  constructor(images, descriptions, classNames) {
    this.images = images;
    this.descriptions = descriptions;
    this.classNames = classNames;
  }

  addEvents() {
    const eventImages = document.querySelectorAll(this.images);
    const descriptionForImages = document.querySelectorAll(this.descriptions);
    const { classNames } = this;
    eventImages.forEach((element, index) => {
      element.addEventListener('click', () => {
        descriptionForImages.forEach(el => {
          el.classList.remove(...classNames);
        }); // reset active itens

        descriptionForImages[index].classList.add(...classNames);
      });
    });
  }

  init() {
    this.addEvents();
  }
}
