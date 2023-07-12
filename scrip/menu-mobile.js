export default function menuMobile() {
  const receiveMenuClick = document.querySelector('[data-menuMobile]');
  const receiveMenu = document.querySelector('[data-menumobile] + ul');
  const menuClicked = () => {
    [receiveMenu, receiveMenuClick].forEach((element) => {
      element.classList.toggle('active');
    });
  };

  if (receiveMenuClick) {
    ['click', 'touchstart'].forEach(eventListener => {
      receiveMenuClick.addEventListener(eventListener, menuClicked);
    });
  }
}
