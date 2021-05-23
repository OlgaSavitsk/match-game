import './button.scss';
import { BaseComponent } from '../../components/base-component';


export class Button extends BaseComponent{
 readonly element: HTMLButtonElement;

 constructor() {
  super('div', ['button']);
  this.element.classList.add('button');
  this.element.innerHTML = 'STOP GAME';
}

 /*  constructor() {
    this.element = document.createElement('button');
    this.element.classList.add('button');
    this.element.innerHTML = 'STOP GAME';
  } */

 /*  constructor (tag: keyof HTMLElementTagNameMap = 'button', styles: string[] = []) {
    this.element = document.createElement('button');
    this.element.classList.add('button');
    this.element.innerHTML = 'STOP GAME';
  } */
}
