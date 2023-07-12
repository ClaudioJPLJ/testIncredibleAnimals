export default function dropDownMenu() { // this is a function for mobile user
  const receiveDropMenus = document.querySelectorAll('[data-dropMenu]');
  const activeMenu = {
    handleEvent(event) {
      event.preventDefault();
      event.target.hasAttribute('data-dropDownMenu') ? this.element.children[1].style.display = 'block' : this.element.children[1].style.display = 'none';
    }
  };
  receiveDropMenus.forEach((element) => {
    ['touchstart', 'click'].forEach(userEvent => {
      element.addEventListener(userEvent, activeMenu);
      document.querySelector('#grid-container').addEventListener(userEvent, activeMenu);
    });
    activeMenu.element = element;
  });
}
