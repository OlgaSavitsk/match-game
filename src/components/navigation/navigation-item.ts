import { BaseComponent } from '../base-component';
import './navigation.scss';

export class NavigationItemAbout extends BaseComponent {

  constructor() {
    super('div', ['navigation__item'])
    this.element.innerHTML = `
      <div class="ico ico-about"></div>
      <div>About game</div>
    `;
    }
}

export class NavigationItemScore extends BaseComponent {

  constructor() {
    super('div', ['navigation__item'])
    this.element.innerHTML = `
      <div class="ico ico-score"></div>
      <div>Best Score</div>
    `;
    }
}

export class NavigationItemSetting extends BaseComponent {

  constructor() {
    super('div', ['navigation__item'])
    this.element.innerHTML = `
      <div class="ico ico-setting"></div>
      <div>Game Settings</div>
    `;
    }
}
