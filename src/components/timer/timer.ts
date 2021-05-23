import './timer.scss';
import { BaseComponent } from '../base-component';
import { Button } from '../../shared/button/button';

let secondCount = 0;

export class Timer extends BaseComponent{
  private timer: Timer;

  constructor()  {
    super('span', ['timer']);
  }

    screenCount() {
      let min = Math.floor((secondCount % 3600) / 60);
      let sec = Math.floor(secondCount % 60);
      let screenMinutes = (min < 10) ? '0' + min : min;
        let screenSeconds = (sec < 10) ? '0' + sec : sec;
        this.element.textContent = screenMinutes + ':' + screenSeconds;
        secondCount++;
    }

    initTimer() {
      this.screenCount()
      let stopWhatch = setInterval(() => {
       this.screenCount()
        }, 1000);
    /*   let button = new Button();
      button.element.addEventListener('click', () => {
        clearInterval(stopWhatch);
      }); */
    }
}


