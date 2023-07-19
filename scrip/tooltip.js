export default class ToolTipFunction {
  constructor(targetElement) {
    this.targetElement = document.querySelectorAll(targetElement);
  }

  createToolTipBox(currentLabel) {
    const elementCreate = document.createElement('div');
    this.targetElement.forEach(el => {
      el.appendChild(elementCreate).classList.add('tooltip-box');
      elementCreate.innerHTML = currentLabel.getAttribute('aria-label');
      el.removeEventListener('mouseover', this.isMouseOver); // removal of the event to not run in the background
    });

    this.elementCreated = elementCreate; // put created element in class
  }

  mouseMove({ offsetX, offsetY }) {
    if (offsetX >= (window.innerWidth / 2)) {
      this.elementCreated.style.top = `${offsetY + 40}px`;
      this.elementCreated.style.left = `${offsetX / 2}px`;
    } else {
      this.elementCreated.style.top = `${offsetY + 40}px`;
      this.elementCreated.style.left = `${offsetX + 40}px`;
    }
  }

  removeTooltipBox({ currentTarget }) {
    this.elementCreated.remove();
    currentTarget.addEventListener('mouseover', this.isMouseOver);
    currentTarget.removeEventListener('mousemove', this.mouseMove);
    currentTarget.removeEventListener('mouseleave', this.removeTooltipBox);
  }

  isMouseOver({ currentTarget, target }) {
    if (!Array.from(target.classList).includes('tooltip-box')) { // evit a little bug at tooltip-box
      this.createToolTipBox(currentTarget);
      currentTarget.addEventListener('mouseleave', this.removeTooltipBox.bind(this));
      currentTarget.addEventListener('mousemove', this.mouseMove.bind(this));
    }
  }

  addEvent() {
    this.targetElement.forEach(element => {
      element.addEventListener('mouseover', this.isMouseOver.bind(this));
    });
  }

  init() {
    this.targetElement.length ? this.addEvent() : null;
    return this;
  }
}
