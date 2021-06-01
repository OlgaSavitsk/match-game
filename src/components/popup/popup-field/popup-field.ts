import './popup-field.scss';
import { BaseComponent } from '../../base-component';
import { Timer } from '../../timer/timer';

import { PopupButton } from './popup-button';

export class PopupField extends BaseComponent {
  private popupButton: PopupButton;

  private timer: Timer;

  constructor() {
    super('div', ['pop-up']);
    this.element.textContent = 'Congratulations! You successfully found all matches on  minutes.';
  }
}

const popupField = new PopupField();
export default popupField;
