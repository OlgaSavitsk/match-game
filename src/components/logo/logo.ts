import './logo.scss';
import { BaseComponent } from '../base-component';

export class Logo extends BaseComponent {
  constructor() {
    super('div', ['logo']);
    this.element.innerHTML = `
  <a class="navigation__link" href="#">
    <div class="logo__up">Match</div>
    <div class="logo__down">Match</div></a>
  `;
  }
}
