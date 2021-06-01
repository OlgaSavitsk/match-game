import './popup-cover.scss';
import { BaseComponent } from '../../base-component';
import { FormRegistr } from '../../form/form-registr';
import { PopupField } from '../popup-field/popup-field';

export class PopupCover extends BaseComponent {
  private popupField: PopupField;

  private formRegistr: FormRegistr;

  constructor() {
    super('div', ['cover']);
    this.element.addEventListener('click', () => {
      this.element.classList.add('hidden');
    });
  }
}
