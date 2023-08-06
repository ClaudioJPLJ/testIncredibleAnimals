import NumbersAnimation from './animNumbers.js';

export default class FetchAnimals {
  constructor(spanNumbers) {
    this.receiveAnimalsList = document.querySelectorAll(spanNumbers);
  }

  async pushJsonAnimals() {
    const animalsJson = await (await fetch('./animalsCount.json')).json();
    this.assignNumber(animalsJson);
  }

  assignNumber(JsonNumbers) {
    this.receiveAnimalsList.forEach((atualElement, index) => {
      atualElement.innerText = JsonNumbers[index].count;
    });
    const animNumbers = new NumbersAnimation(this.receiveAnimalsList, '#numbersContainer');
    animNumbers.init();
  }

  init() {
    this.receiveAnimalsList ? this.pushJsonAnimals() : null;
    return this;
  }
}
