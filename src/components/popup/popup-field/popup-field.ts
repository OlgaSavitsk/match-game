import './popup-field.scss';
import { BaseComponent } from "../../base-component";
import { PopupButton } from './popup-button';
import { Timer } from '../../../components/timer/timer';

export class PopupField extends BaseComponent {
  private popupButton: PopupButton;
  private timer: Timer;

  constructor() {
  super('div', ['pop-up']);
this.popupButton = new PopupButton();
this.element.textContent = `Congratulations! You successfully found all matches on  minutes.`
this.element.appendChild(this.popupButton.element).onclick = () => {
  
}

}

  outputResult() {
    this.element.classList.add('show');
  }

}
const popupField = new PopupField()
export default popupField;
