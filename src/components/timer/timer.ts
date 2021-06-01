import './timer.scss';
import { BaseComponent } from '../base-component';
import { PopupButton } from '../popup/popup-field/popup-button';
import { PopupField } from '../popup/popup-field/popup-field';

let secondCount = 0;

export class Timer extends BaseComponent {
  private stopWhatch: NodeJS.Timeout;

  private popupField: PopupField;

  private popupButton: PopupButton;

  constructor() {
    super('span', ['timer']);
    this.stopTimer;
  }

  screenCount() {
    const min: number = Math.floor((secondCount % 3600) / 60);
    const sec = Math.floor(secondCount % 60);
    const screenMinutes = min < 10 ? `0${min}` : min;
    const screenSeconds = sec < 10 ? `0${sec}` : sec;
    this.element.textContent = `${screenMinutes}:${screenSeconds}`;
    setTimeout(() => {
      secondCount++;
    }, 30000);
  }

  initTimer() {
    secondCount = 0;
    this.screenCount();
    this.stopWhatch = setInterval(() => {
      this.screenCount();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.stopWhatch);
    const popupfield = document.querySelector('.pop-up') as HTMLElement;
    popupfield.textContent = `Congratulations! You successfully found all matches on ${this.element.textContent} minutes.`;
    this.popupButton = new PopupButton();
    popupfield.appendChild(this.popupButton.element).onclick = () => {
      popupfield.classList.add('hidden');
    };
  }
}

export default Timer;
