import './button-form.scss';
import { Component } from '../../../component';
import { Input } from '../form/input';
import { PopupCover } from '../../../components/popup/popup-cover/popup-cover';
import { FormRegistr } from '../form-registr';


export class ButtonCancel implements Component {
  private readonly buttonCancel: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.buttonCancel = document.createElement('button');
    this.buttonCancel.classList.add('form__button_disabled');
    this.buttonCancel.innerHTML = 'cancel';
  }

  render(): HTMLElement {
    this.root.appendChild(this.buttonCancel);
    return this.buttonCancel;
  }
}
