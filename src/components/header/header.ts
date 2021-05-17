import './header.scss';
import { BaseComponent } from "../base-component";
import { HeaderWrapper } from "./header-wrapper";
import { HeaderContainer } from './header-container';
import { Logo } from '../logo/logo';
import { Navigation } from '../navigation/navigation';
import { Button } from '../button/button';
import { Avatar } from '../avatar/avatar';

export class Header extends BaseComponent {
  public header: HTMLElement;
  public headerWrapper: HeaderWrapper;
  public headerContainer: HeaderContainer;
  private readonly logo: Logo;
  public navigation: Navigation;
  private readonly button: Button;
  private readonly avatar: Avatar;

constructor() {
    super('header', ['header']);
    this.headerWrapper = new HeaderWrapper();
    this.headerContainer = new HeaderContainer();
    this.logo = new Logo();
    this.navigation = new Navigation();
    this.button = new Button();
    this.avatar = new Avatar();
    this.element.appendChild(this.headerWrapper.element);
    this.headerWrapper.element.appendChild(this.headerContainer.element);
    this.headerContainer.element.appendChild(this.logo.element);
    this.headerContainer.element.appendChild(this.navigation.element);
    this.headerContainer.element.appendChild(this.button.element);
    this.headerContainer.element.appendChild(this.avatar.element);
  }
}
