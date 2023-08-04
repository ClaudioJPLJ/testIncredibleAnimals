/* eslint-disable max-len */
export default class OpeningHours {
  constructor(elementTarget, openingRules = { begin: 8, closure: 18, workDay: [1, 5] }) {
    this.receiveElementHours = document.querySelector(elementTarget);
    this.hours = new Date();
    this.openingRules = openingRules;
    // openingRules property takes a start and end time of work,
    // and work days between 0 and 6
  }

  itsWorking() {
    const working = this.openingRules;
    const itsTime = (this.hours.getUTCHours() - 3) >= working.begin && (this.hours.getUTCHours() - 3) < working.closure;
    // Brasilia time UTC
    const itsWorkDay = this.hours.getDay() >= working.workDay[0] && this.hours.getDay() <= working.workDay[1];
    if (itsTime && itsWorkDay) {
      this.receiveElementHours.classList.add('aberto');
    }
  }

  init() {
    this.receiveElementHours ? this.itsWorking() : null;
    return this;
  }
}
