import './button-form.scss';
import { Component } from '../../../component';
import { ButtonAdd } from './button-add';
import { ButtonCancel } from './button-cancel';


export class ButtonForm implements Component {
  private readonly buttonForm: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.buttonForm = document.createElement('div');
    this.buttonForm.classList.add('form__button');
  }

  render(): HTMLElement {
    this.root.appendChild(this.buttonForm);
    this.buttonForm.appendChild(new ButtonAdd(this.buttonForm).render());
    this.buttonForm.appendChild(new ButtonCancel(this.buttonForm).render());
    return this.buttonForm;
  }
}
