export default function faqAnim() {
  const classElement = 'opened';
  const receiveDt = document.querySelectorAll('#faq dt');
  const receiveDd = document.querySelectorAll('#faq dd');
  receiveDd[0].classList.add(classElement);
  receiveDt[0].classList.add(classElement);

  receiveDt.forEach((element, index) => {
    element.addEventListener('click', () => {
      receiveDd[index].classList.toggle(classElement);
      receiveDt[index].classList.toggle(classElement);
    });
  });
}
