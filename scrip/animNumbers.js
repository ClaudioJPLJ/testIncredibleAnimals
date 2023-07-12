export default function numbersAnimation() {
  const receiveNumbers = document.querySelectorAll('span[data-numbers]');
  let count = 1;
  const observer = new MutationObserver(() => {
    receiveNumbers.forEach(el => {
      const finalNumber = el.innerText;
      const timerForNumbers = setInterval(() => {
        el.innerText = count;
        count += Math.floor((finalNumber / 400));
        if (count >= finalNumber) {
          el.innerText = finalNumber;
          clearInterval(timerForNumbers);
        }
      }, 25);
    });
    observer.disconnect();
  });
  const receiveNumbersParent = document.querySelector('#numbersContainer');
  observer.observe(receiveNumbersParent, { attributes: true });
}
