import './form.scss';
import { Component } from '../../../component';
const buttonadd = document.querySelector('.form__button_colored');
export class Input implements Component {
  private readonly field: HTMLInputElement;

  private readonly caption: HTMLElement;

  private readonly error: HTMLElement;

  public regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/gi;

  public regName = /^[a-zа-я0-9_-]{2,16}$/gi;

  public regNumber = /^\d{1,}$/gi;

  name: string;

  constructor(
    private readonly root: HTMLElement,
    placeholder: string,
    name: string,
    text: string
  ) {
    this.field = document.createElement('input');
    this.field.placeholder = placeholder;
    this.caption = document.createElement('label');
    this.caption.innerHTML = text;
    this.error = document.createElement('div');
    this.error.classList.add('error');
    this.field.addEventListener('input', () => {
      if (this.onValidate) {
        this.setError(this.onValidate(this.getValue()));
      }
    });
  }

  onValidate(value: string): string {
    if (this.name === 'email') {
      return this.regEmail.exec(this.field.value) ? 'ok' : 'Error';
    }
    if (this.field.value.length === 0) {
      return 'Field cannot be empty';
      buttonadd?.setAttribute('disabled', 'disabled');
    }
    if (/\s/i.exec(this.field.value)) {
      return 'The name cannot contain more than one word';
    }
    if (this.regNumber.exec(this.field.value)) {
      return 'The name cannot be numbers';
    }
    return this.regName.exec(this.field.value)
      ? 'ok'
      : 'Field cannot consist of one symbal or contain the marks';
  }

  getValue(): string {
    return this.field.value;
  }

  setError(err: string | null): void {
   // const buttonadd = document.querySelector('.form__button_colored');
    this.error.textContent = err;
    this.field.classList.add('invalid');
    this.field.classList.remove('valid');
    buttonadd?.setAttribute('disabled', 'disabled');
    if (err === 'ok') {
      this.field.classList.remove('invalid');
      this.field.classList.add('valid');
      buttonadd?.removeAttribute('disabled');
    }
  }

  render(): HTMLElement {
    this.root.appendChild(this.field);
    this.root.appendChild(this.caption);
    this.root.appendChild(this.error);
    return this.field;
  }
}
export default Input;
