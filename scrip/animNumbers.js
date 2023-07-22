export default class NumbersAnimation {
  constructor(receiveNumbers, observedElement) {
    this.receiveNumbers = receiveNumbers;
    this.observedElement = document.querySelector(observedElement);
  }

  Observe() {
    const instanceObserver = new MutationObserver(() => {
      instanceObserver.disconnect();
      let count = 1;
      this.receiveNumbers.forEach(el => {
        const finalNumber = +(el.innerText);
        const timerForNumbers = setInterval(() => {
          el.innerText = count;
          count += Math.floor((finalNumber / 350));
          if (count >= finalNumber) {
            el.innerText = finalNumber;
            clearInterval(timerForNumbers);
          }
        }, 25);
      });
    });
    instanceObserver.observe(this.observedElement, { attributes: true });
  }

  init() {
    this.observedElement && this.receiveNumbers.length ? this.Observe() : null;
    return this;
  }
}
