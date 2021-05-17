import './button.scss';
import { BaseComponent } from '../base-component';


export class Button extends BaseComponent {

  constructor() {
    super('button', ['button']);
    this.element.innerHTML = 'STOP GAME';
}
}
