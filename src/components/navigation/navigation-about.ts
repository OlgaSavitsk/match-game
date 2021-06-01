import { BaseComponent } from '../base-component';
import './navigation.scss';

export class NavigationItemAbout extends BaseComponent {
  constructor() {
    super('div', ['navigation__item']);
    this.element.innerHTML = `
        <a class="navigation__link" href="#">
        <div class="ico ico-about"></div>About game</a>
    `;
    this.element.classList.add('active');
  }
}
