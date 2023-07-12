/* eslint-disable no-use-before-define */
export default function toolTipFunction() {
  const receiveToolTips = document.querySelectorAll('[data-toolTip]');
  const mouseMove = {
    handleEvent(event) {
      this.elementCreated.style.top = `${event.offsetY + 20}px`;
      this.elementCreated.style.left = `${event.offsetX + 20}px`;
    }
  };
  const removeTooltipBox = {
    handleEvent() {
      this.createdElement.remove();
      this.parentElement.addEventListener('mouseover', isMouseOver);
      this.parentElement.removeEventListener('mousemove', mouseMove);
      this.parentElement.removeEventListener('mouseleave', removeTooltipBox);
    }
  };

  function isMouseOver() {
    this.addEventListener('mouseleave', removeTooltipBox);
    this.addEventListener('mousemove', mouseMove);
    const createElement = createToolTipBox(this);
    removeTooltipBox.createdElement = createElement;
    removeTooltipBox.parentElement = this;
  }

  receiveToolTips.forEach(element => {
    element.addEventListener('mouseover', isMouseOver);
  });

  const createToolTipBox = parentElement => {
    const elementCreate = document.createElement('div');
    parentElement.appendChild(elementCreate).classList.add('tooltip-box');
    elementCreate.innerHTML = parentElement.getAttribute('aria-label');
    mouseMove.elementCreated = elementCreate;
    parentElement.removeEventListener('mouseover', isMouseOver);
    return elementCreate;
  };
}
