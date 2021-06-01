import { BaseComponent } from '../base-component';
import './navigation.scss';

export class NavigationItemScore extends BaseComponent {
  constructor() {
    super('div', ['navigation__item']);
    this.element.innerHTML = `
      <a class="navigation__link" href="#best">
      <div class="ico ico-score"></div>Best Score</a>
    `;
  }
}
