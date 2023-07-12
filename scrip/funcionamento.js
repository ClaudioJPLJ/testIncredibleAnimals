export default function openingHours() {
  const receiveElementHours = document.querySelector('[data-opTime]');
  const hours = new Date();
  const itsTime = hours.getHours >= 8 && hours.getHours < 18;
  const itsWorkDay = hours.getDay !== 0 && hours.getDay !== 6;

  if (itsTime && itsWorkDay) {
    receiveElementHours.classList.add('aberto');
  }
}
