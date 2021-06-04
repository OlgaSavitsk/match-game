import './popup-field.scss';
import { BaseComponent } from '../../base-component';
import { DataBase } from '../../indexedDB';
import { Timer } from '../../timer/timer';

import { PopupButton } from './popup-button';

export class PopupField extends BaseComponent {
  private popupButton: PopupButton;

  private db: DataBase = new DataBase();

  private timer: Timer;

  constructor() {
    super('div', ['pop-up']);
    this.element.textContent = 'Congratulations! You successfully found all matches on  minutes.';
    this.popupButton = new PopupButton();
    this.element.appendChild(this.popupButton.element).onclick = async () => {
      await this.db.initScore('olgasav', 2);
    };
  }
}

const popupField = new PopupField();
export default popupField;
