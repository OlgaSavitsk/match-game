import './form.scss';
import { Component } from '../../component';

import { Input } from './input';

export class Form implements Component {
  private form: HTMLElement;

  userData: {};

  private inputs: Input[];

  onValidate: string | (() => boolean) | undefined;

  constructor(
    private readonly root: HTMLElement,
  ) {
    this.form = document.createElement('form');
  }

  render(): HTMLElement {
    this.root.appendChild(this.form);
    this.form.appendChild(new Input(this.form, 'Jessie', 'username', 'First Name', 'text', this.onValidate).render()),
    this.form.append(new Input(this.form, 'Doe', 'surname', 'Last Name', 'text', this.onValidate).render()),
    this.form.append(new Input(this.form, 'Jessie.Doe@gmail.com', 'email', 'E-mail', 'email', this.onValidate).render());

    return this.form;
  }
}
export default Form;
