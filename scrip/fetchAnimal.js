import numbersAnimation from './animNumbers.js';

export default async function fetchAnimals() {
  const receiveAnimalsList = document.querySelectorAll('[data-numbers]');
  const pushJsonAnimals = await (await fetch('../animalsCount.json')).json();
  receiveAnimalsList.forEach((atualElement, index) => {
    atualElement.innerText = pushJsonAnimals[index].count;
  });
  numbersAnimation();
}
