import './timer.scss';
import { BaseComponent } from '../base-component';
import { PopupField } from '../../components/popup/popup-field/popup-field';
import { PopupButton } from '../../components/popup/popup-field/popup-button';

let secondCount = 0;

export class Timer extends BaseComponent{
  private timer: Timer;
  private stopWhatch: NodeJS.Timeout;
  private popupField: PopupField;
  private popupButton: PopupButton;

  constructor()  {
    super('span', ['timer']);
    this.stopTimer;
    this.popupField = new PopupField();
    //this.element.appendChild(this.popupField.element);

  }
    screenCount(): void {
      let min: number = Math.floor((secondCount % 3600) / 60);
      let sec = Math.floor(secondCount % 60);
      let screenMinutes = (min < 10) ? '0' + min : min;
        let screenSeconds = (sec < 10) ? '0' + sec : sec;
        this.element.textContent = screenMinutes + ':' + screenSeconds;
        secondCount++;

    }

    initTimer(): void {
      secondCount = 0;
      this.screenCount()
      this.stopWhatch = setInterval(() => {
       this.screenCount()
        }, 1000);
    }

    stopTimer() {
      clearInterval(this.stopWhatch);
      const popupfield =  document.querySelector('.pop-up') as HTMLElement
      this.popupField.element.textContent = `
       Congratulations! You successfully found all matches on ${this.element.textContent} minutes.`
       this.popupButton = new PopupButton();
       popupfield.appendChild(this.popupButton.element).onclick = () => {
         this.popupButton.element.classList.remove('show');
        popupfield.classList.remove('show');
       }

    }
}
