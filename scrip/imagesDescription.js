export default function imagesAnim() {
  const images = document.querySelectorAll('#animals ul img');
  const descriptions = document.querySelectorAll('#animals-description section');
  descriptions[0].classList.add('ativo');
  const clickImg = (ev) => {
    descriptions.forEach(el => {
      el.classList.remove('ativo');
    });

    descriptions[ev.target.id].classList.add('ativo');
  };

  let countForId = 0;
  images.forEach(el => {
    el.setAttribute('id', countForId++);
    el.addEventListener('click', clickImg);
  });
}
