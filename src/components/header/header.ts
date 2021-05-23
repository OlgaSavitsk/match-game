import './header.scss';
import { BaseComponent } from "../base-component";
import { HeaderWrapper } from "./header-wrapper";
import { HeaderContainer } from './header-container';
import { Logo } from '../logo/logo';
import { Navigation } from '../navigation/navigation';
import  { Button } from '../../shared/button/button';
import { Avatar } from '../avatar/avatar';

let stopWatch: NodeJS.Timeout;

export class Header extends BaseComponent {
  public header: HTMLElement;
  public headerWrapper: HeaderWrapper;
  public headerContainer: HeaderContainer;
  private logo: Logo;
  public navigation: Navigation;
  public button: Button;
  private avatar: Avatar;

constructor(private readonly root: HTMLElement) {
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
  render(){
    this.root.appendChild(this.element);
    return this.element;
  }
}

