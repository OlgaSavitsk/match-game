import './button-registr.scss';
import { Component } from '../../component';

export class ButtonRegistr implements Component {
  readonly buttonRegistr: HTMLButtonElement;

  constructor(private readonly root: HTMLElement) {
    this.buttonRegistr = document.createElement('button');
    this.buttonRegistr.classList.add('button-registr');
    this.buttonRegistr.innerHTML = 'REGISTER NEW PLAYER';
  }

  render(): HTMLButtonElement {
    this.root.appendChild(this.buttonRegistr);
    return this.buttonRegistr;
  }
}
