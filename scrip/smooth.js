export default function smoothScrol() {
  const receiveLinks = document.querySelectorAll('a[href^="#"]');

  receiveLinks.forEach(element => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const clickedHref = event.target.getAttribute('href');
      const targetSection = document.querySelector(clickedHref);
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
}
