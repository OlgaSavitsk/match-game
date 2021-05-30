import './button-registr.scss';
import { Component } from '../../component';

export class ButtonRegistr implements Component{
 readonly buttonRegistr: HTMLButtonElement;
  onClick: () => void = () => {};


constructor(private readonly root: HTMLElement) {
this.buttonRegistr = document.createElement('button');
this.buttonRegistr.classList.add('button-registr');
this.buttonRegistr.innerHTML = 'REGISTER NEW PLAYER';
/*  this.buttonRegistr.onclick = () => {
  this.onClick();
  console.log(this.buttonRegistr.onclick)
} */
}

  render(): HTMLElement {
    this.root.appendChild(this.buttonRegistr);
    return this.buttonRegistr;
  }
}
