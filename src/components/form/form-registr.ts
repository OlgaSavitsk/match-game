import './form.scss';
import { Component } from '../../component';
import { PopupCover } from '../popup/popup-cover/popup-cover';

import { ButtonForm } from './button-form/button-form';
import { FormContainer } from './form-container/form-container';

export class FormRegistr implements Component {
  private readonly formRegistr: HTMLElement;

  private popupCover: PopupCover;

  constructor(private readonly root: HTMLElement/* , private readonly db: DataBase */) {
    this.formRegistr = document.createElement('div');
    this.formRegistr.classList.add('form-registr');
    this.formRegistr.innerHTML = `
    <h3 class="form__header">Registr new Player</h3>
    `;
  }

  render(): HTMLElement {
    this.root.appendChild(this.formRegistr);
    this.formRegistr.appendChild(new FormContainer(this.formRegistr/* , this.db */).render());
    this.popupCover = new PopupCover();
    this.root.appendChild(this.popupCover.element).onclick = () => {
      this.root.innerHTML = '';
      this.popupCover.element.classList.remove('show');
    };
    this.formRegistr.appendChild(new ButtonForm(this.formRegistr).render()).onclick = () => {
      this.formRegistr.innerHTML = '';
    };
    return this.formRegistr;
  }
}
