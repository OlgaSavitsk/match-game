import './popup-cover.scss';
import { BaseComponent } from "../../base-component";
import { PopupField } from '../popup-field/popup-field';
import { FormRegistr } from '../../../components/form/form-registr';

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
