import './form.scss';
import { Component } from '../../../component';
import { Input } from './input';
import { BaseComponent } from '../../base-component';


export class Form implements Component {
  private readonly form: HTMLElement;
  private inputs: Input[] = [];
  private input = Input;

  constructor(private readonly root: HTMLElement) {
    this.form = document.createElement('form');
   // this.form.classList.add('form');
   /* this.inputs = [new Input( this.element, (e: string) => e.length === 0 ? 'error': 'ok' ),
    new Input()] */
  }

 /*  constructor(private readonly root: HTMLElement) {
    this.form = document.createElement('form');
    this.inputs = [new Input((e: string) => e.length < 2 ? 'error': 'ok')]
  } */

  render(): HTMLElement {
    this.root.appendChild(this.form);
    this.form.appendChild(new Input(this.form).render());
    return this.form;
  }
}
