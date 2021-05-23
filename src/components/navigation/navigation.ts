import './navigation.scss';
import { BaseComponent } from '../base-component';
import { NavigationItemAbout } from './navigation-about';
import { NavigationItemScore }from './navigation-score';
import { NavigationItemSetting } from './navigation-setting';

export class Navigation extends BaseComponent {
private navigationItemAbout: NavigationItemAbout;
private navigationItemScore: NavigationItemScore;
private navigationItemSetting: NavigationItemSetting;

  constructor() {
    super('nav', ['navigation'])
    this.navigationItemAbout = new NavigationItemAbout();
    this.navigationItemScore = new NavigationItemScore();
    this.navigationItemSetting = new NavigationItemSetting();
    this.element.appendChild(this.navigationItemAbout.element);
    this.element.appendChild(this.navigationItemScore.element);
    this.element.appendChild(this.navigationItemSetting.element);
    }
}
