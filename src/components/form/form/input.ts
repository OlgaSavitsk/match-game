import './form.scss';
import { Component } from '../../component';
import { DataBase } from '../../indexedDB';
import { ButtonAdd } from '../button-form/button-add';

const buttonadd = document.querySelector('.form__button_colored');
export class Input implements Component {
  public field: HTMLInputElement;

  private readonly caption: HTMLElement;

  private readonly error: HTMLElement;

  private buttonAdd: ButtonAdd;

  public regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  public regName = /^[a-zа-я0-9_-]{2,30}$/gi;

  public regNumber = /^\d{1,}$/gi;

  name: string;

  userDate: {};

  onInput: () => void = () => {};

  usernameValue: string;

  surnameValue: string;

  emailValue: string;

  value: any;

  private db: DataBase = new DataBase();

  constructor(
    private readonly root: HTMLElement,
    placeholder: string,
    name: string,
    text: string,
    type: string,
    onValidate: string | (() => boolean) | undefined,
  ) {
    this.field = document.createElement('input');
    this.field.placeholder = placeholder;
    this.caption = document.createElement('label');
    this.caption.innerHTML = text;
    this.error = document.createElement('div');
    this.error.classList.add('error');
    this.field.name = name;
    this.field.addEventListener('input', async e => {
      if (this.onValidate) {
        this.setError(this.onValidate(this.getValue()));
      }
      if (this.onInput) {
        this.onInput();
      }
    });
  }
  /*
  getValueInput() {
    return (this.field.name === 'username') ? this.usernameValue = this.field.value : ''
    return (this.field.name === 'surname') ? this.surnameValue = this.field.value : ''
    return (this.field.name === 'email') ? this.emailValue = this.field.value : ''

  let userData = {
    name: this.usernameValue,
    surname: this.surnameValue,
    email: this.emailValue,
    }
    return userData;
  } */

  /* getValueInput() {
  if (this.field.name === 'username'){
    this.usernameValue = this.field.value;
   }
   return this.usernameValue
   if (this.field.name === 'surname'){
     this.surnameValue = this.field.value;
   }
   return this.surnameValue
   if (this.field.name === 'email'){
     this.emailValue = this.field.value;
   }
   return this.emailValue;

let userDate = {
  'username': this.usernameValue,
  'surname': this.surnameValue,
  'email': this.emailValue
  }
  return userDate;
} */

  onValidate(value: string): string {
    if (this.field.name === 'email') {
      buttonadd?.setAttribute('disabled', 'disabled');
      return (this.regEmail.exec(this.field.value)) ? 'ok' : 'Error';
    }
    if (this.field.value.length === 0) {
      buttonadd?.setAttribute('disabled', 'disabled');
      return 'Field cannot be empty';
    }
    if (/\s/i.exec(this.field.value)) {
      return 'The name cannot contain more than one word';
    }
    if (this.regNumber.exec(this.field.value)) {
      return 'The name cannot be numbers';
    }
    return (this.regName.exec(this.field.value)) ? 'ok' : 'Тame cannot consist of one symbal or contain the marks';
  }

  getValue() {
    return this.field.value;
  }

  setError(err: string | null): void {
    this.error.textContent = err;
    this.field.classList.add('invalid');
    this.field.classList.remove('valid');
    buttonadd?.setAttribute('disabled', 'disabled');
    if (err === 'ok') {
      this.error.innerHTML = 'ok';
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
