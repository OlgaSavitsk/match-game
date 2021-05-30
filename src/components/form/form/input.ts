import './form.scss';
import { Component } from '../../../component';
import { ButtonAdd } from '../button-form/button-add';
export class Input implements Component {
  private readonly field: HTMLInputElement;
  private readonly caption: HTMLElement;
  private readonly error: HTMLElement;
  public regEmail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/gi;
  public regName: RegExp = /^[a-zа-я0-9_-]{2,16}$/gi
  public regNumber: RegExp = /^\d{1,}$/gi;
  placeholder: string = '';
  err: string;
  name: string;
  validate: (() => boolean);
  onInput: () => void = () => {};
  innerHTML: string;
  private buttonAdd: ButtonAdd;


  constructor(private readonly root: HTMLElement, placeholder: string, name: string, text: string/* , private callback: Function */)/* onValidate: string | (() => boolean) | undefined) */ {
    //this.callback()
    this.field = document.createElement('input');
    this.field.placeholder = placeholder;
    this.caption = document.createElement('label');
    this.caption.innerHTML = text;
    this.error = document.createElement('div');
    this.error.classList.add('error');
    this.name = name;
    //this.root.appendChild(new ButtonAdd(this.root).render())
    this.field.addEventListener('input', (e) => {
      if(this.onValidate) {
        this.setError(this.onValidate(this.getValue()));
      }
      if(this.onInput) {
        this.onInput();
      }
  });
  }

 onValidate(value: string): string{
    if( this.name == 'email'){
      return  this.field.value.match(this.regEmail) ? 'ok' : 'Error';
    }
    if(this.field.value.length === 0) {
      return 'Field cannot be empty';
    }
    if(this.field.value.match(/\s/i)){
      return  'The name cannot contain more than one word';
    }
    if(this.field.value.match(this.regNumber)){
      return  'The name cannot be numbers';
    } else {
      return this.field.value.match(this.regName) ? 'ok' : 'Тame cannot consist of one symbal or contain the marks';
    }
  }

  getValue() {
    return this.field.value;
  }

setError(err: string | null) {
    console.log(err);
    this.error.textContent = err;
    this.field.classList.add('invalid');
     this.field.classList.remove('valid');
    if(err === 'ok'){
      //this.error.textContent = 'ok';
      this.field.classList.remove('invalid');
      this.field.classList.add('valid');
    }
  }

 render(): HTMLElement {
    this.root.appendChild(this.field);
    this.root.appendChild(this.caption);
    this.root.appendChild(this.error)
    return this.field;
  }

}
