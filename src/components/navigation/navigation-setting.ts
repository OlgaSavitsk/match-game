import { BaseComponent } from '../base-component';
import './navigation.scss';

export class NavigationItemSetting extends BaseComponent {

  constructor() {
    super('div', ['navigation__item'])
    this.element.innerHTML = `
      <a class="navigation__link" href="#setting">
      <div class="ico ico-setting"></div>Game Settings</a>
    `;
  }
}
