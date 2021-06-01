import './navigation.scss';
import { BaseComponent } from '../base-component';

import { NavigationItemAbout } from './navigation-about';
import { NavigationItemScore } from './navigation-score';
import { NavigationItemSetting } from './navigation-setting';

export class Navigation extends BaseComponent {
  private navigationItemAbout: NavigationItemAbout;

  private navigationItemScore: NavigationItemScore;

  private navigationItemSetting: NavigationItemSetting;

  constructor() {
    super('nav', ['navigation']);
    this.navigationItemAbout = new NavigationItemAbout();
    this.navigationItemScore = new NavigationItemScore();
    this.navigationItemSetting = new NavigationItemSetting();
    this.element.appendChild(this.navigationItemAbout.element).onclick = () => {
      this.navigationItemAbout.element.classList.add('active');
      this.navigationItemSetting.element.classList.remove('active');
      this.navigationItemScore.element.classList.remove('active');
    };
    this.element.appendChild(this.navigationItemScore.element).onclick = () => {
      this.navigationItemScore.element.classList.add('active');
      this.navigationItemSetting.element.classList.remove('active');
      this.navigationItemAbout.element.classList.remove('active');
    };
    this.element.appendChild(this.navigationItemSetting.element).onclick = () => {
      this.navigationItemSetting.element.classList.add('active');
      this.navigationItemAbout.element.classList.remove('active');
      this.navigationItemScore.element.classList.remove('active');
    };
  }
}
