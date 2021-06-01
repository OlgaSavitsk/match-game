import './popup-field.scss';
import { BaseComponent } from '../../base-component';

export class PopupButton extends BaseComponent {
  constructor() {
    super('button', ['pop-up__button']);
    this.element.innerHTML = 'ok';
  }
}
