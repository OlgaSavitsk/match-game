import './popup-field.scss';
import { BaseComponent } from '../../base-component';
import { DataBase } from '../../indexedDB';

export class PopupButton extends BaseComponent {
  private db: DataBase = new DataBase();

  constructor() {
    super('button', ['pop-up__button']);
    this.element.innerHTML = '<a class="button__link" href="#best">OK</a>';
  }
}
