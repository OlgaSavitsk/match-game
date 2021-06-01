import './form.scss';
import { Component } from '../../../component';

const buttonadd = document.querySelector('.form__button_colored');
export class Input implements Component {
  private readonly field: HTMLInputElement;

  private readonly caption: HTMLElement;

  private readonly error: HTMLElement;

  public regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  public regName = /^[a-zа-я0-9_-]{2,30}$/gi;

  public regNumber = /^\d{1,}$/gi;

  name: string;
onInput: () => void =() => {};

  constructor(
    private readonly root: HTMLElement,
    placeholder: string,
    name: string,
    text: string,
    onValidate: string | (() => boolean) | undefined
  )  {
    this.field = document.createElement('input');
    this.field.placeholder = placeholder;
    this.caption = document.createElement('label');
    this.caption.innerHTML = text;
    this.error = document.createElement('div');
    this.error.classList.add('error');
    this.field.addEventListener('input', () => {
      if (this.onValidate) {
        this.setError(this.onValidate(this.getValue()));
        console.log(this.name)
      }
      if(this.onInput) {
        this.onInput();
      }

    });
  }

  onValidate(value: string): string{
    if( this.field.name == 'email'){
      return  this.field.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i) ? 'ok' : 'Error';
    }
    if(this.field.value.length === 0) {
      buttonadd?.setAttribute('disabled', 'disabled');
      return 'Field cannot be empty';
    }
    if(this.field.value.match(/\s/i)){
      return  'The name cannot contain more than one word';
    }
    if(this.field.value.match(this.regNumber)){
      return  'The name cannot be numbers';
    } else {
      return this.field.value.match(this.regName) ? 'ok' : 'Field cannot consist of one symbal or contain the marks';
    }
  }

  getValue() {
    return this.field.value;
  }

  setError(err: string | null) {
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
