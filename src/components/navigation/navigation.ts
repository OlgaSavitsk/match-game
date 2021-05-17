import './navigation.scss';
import { BaseComponent } from '../base-component';
import { NavigationItemAbout, NavigationItemScore, NavigationItemSetting } from './navigation-item';


export class Navigation extends BaseComponent {
private readonly navigationItemAbout: NavigationItemAbout;
private readonly navigationItemScore: NavigationItemScore;
private readonly navigationItemSetting: NavigationItemSetting;

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
