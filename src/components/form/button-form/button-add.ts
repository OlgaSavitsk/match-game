import './button-form.scss';
import { Component } from '../../../component';

export class ButtonAdd implements Component {
  private readonly buttonAdd: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.buttonAdd = document.createElement('button');
    // this.buttonAdd.setAttribute('type', 'file')
    this.buttonAdd.classList.add('form__button_colored');
    this.buttonAdd.innerHTML = 'Add user';
  }

  render(): HTMLElement {
    this.root.appendChild(this.buttonAdd);
    return this.buttonAdd;
  }
}
