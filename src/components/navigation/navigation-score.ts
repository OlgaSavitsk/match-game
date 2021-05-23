import { BaseComponent } from '../base-component';
import './navigation.scss';

export class NavigationItemScore extends BaseComponent {

  constructor() {
    super('div', ['navigation__item'])
    this.element.innerHTML = `
      <div class="ico ico-score"></div>
      <a class="navigation__link" href="#best">Best Score</a>
    `;
    }
}
