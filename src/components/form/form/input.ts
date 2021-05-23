import './form.scss';
import { Component } from '../../../component';
//import { BaseComponent } from '../../base-component';


export class Input implements Component {
  private readonly input: HTMLElement;
  private readonly caption: HTMLElement;
  private readonly error: HTMLElement;
 /*  private readonly input: BaseComponent;
  private readonly caption: BaseComponent;
  private readonly error: BaseComponent;
  private onValidate: boolean; */

/*   constructor() {
    super('input')
    this.caption = new BaseComponent('label');
    this.input = new BaseComponent('input');
    this.error = new BaseComponent('div');
    this.input.element.addEventListener('input', () => {this.onInput()});
    this.validate = this.onValidate;
  } */
  constructor(private readonly root: HTMLElement) {
    this.input = document.createElement('input');
    this.caption = document.createElement('label');
    this.caption.innerHTML = 'First Name';
    this.error = document.createElement('div');
    this.error.classList.add('error');
   // this.input.addEventListener('input', () => {this.onInput()})
  }

 /*  onInput() {
    this.error.textContent = this.validate(this.input.element.value);
  } */

 render(): HTMLElement {
    this.root.appendChild(this.input);
    this.root.prepend(this.caption);
    this.input.appendChild(this.error)
    return this.input;
  }

}
