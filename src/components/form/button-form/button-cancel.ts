import './button-form.scss';
import { Component } from '../../../component';

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
