import './form-container.scss';
import { Component } from '../../../component';
import { FormAvatar } from '../form-avatar/form-avatar';
import { Form } from '../form/form';


export class FormContainer implements Component {
  private readonly formContainer: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.formContainer = document.createElement('div');
    this.formContainer.classList.add('form__container');
  }

  render(): HTMLElement {
    this.root.appendChild(this.formContainer);
    this.formContainer.appendChild(new Form(this.formContainer).render());
    this.formContainer.appendChild(new FormAvatar(this.formContainer).render());
    return this.formContainer;
  }
}
