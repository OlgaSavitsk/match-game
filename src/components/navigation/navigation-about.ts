import { BaseComponent } from '../base-component';
import './navigation.scss';

export class NavigationItemAbout extends BaseComponent {

  constructor() {
    super('div', ['navigation__item'])
    this.element.innerHTML = `
     <div class="ico ico-about"></div>
     <a class="navigation__link" href="#">About game</a>
    `;
    }
}
