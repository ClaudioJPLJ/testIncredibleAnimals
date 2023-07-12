export default function scrollAnim() {
  function requireAnim() {
    const receiveElements = document.querySelectorAll('.js-scroll');
    const calcHeight = window.innerHeight * 0.7;
    receiveElements.forEach(element => {
      if (element.getBoundingClientRect().top <= calcHeight) {
        element.classList.add('ativo');
      }
    });
  }
  window.addEventListener('scroll', requireAnim);
}
