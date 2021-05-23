import './form.scss';
import { Component } from '../../component';
import { FormContainer } from './form-container/form-container';
import { ButtonForm } from './button-form/button-form';


export class FormRegistr implements Component {
  private readonly formRegistr: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.formRegistr = document.createElement('div');
    this.formRegistr.classList.add('form-registr');
    this.formRegistr.innerHTML = `
    <h3 class="form__header">Registr new Player</h3>
    `;
  }

  render(): HTMLElement {
    this.root.appendChild(this.formRegistr);
    this.formRegistr.appendChild(new FormContainer(this.formRegistr).render());
    this.formRegistr.appendChild(new ButtonForm(this.formRegistr).render());
    return this.formRegistr;
  }
}
