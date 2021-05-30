import './button.scss';
import { BaseComponent } from '../../components/base-component';


export class Button extends BaseComponent{
 readonly button: HTMLButtonElement;
 public onClick: () => void = () => {};

 constructor() {
  super('div', ['button']);
  this.element.classList.add('button');
  this.element.innerHTML = 'STOP GAME';
  this.element.innerHTML = `
  <a class="button__link" href="#">STOP GAME</a>
`;
}
}
