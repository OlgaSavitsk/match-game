import { Button } from '../../shared/button/button';
import { SettingField } from './setting-field/setting-field';

import { Component } from '../../component';
import '../pages.scss';


export class SettingPage implements Component {
  private readonly settingPage: HTMLElement;

  private settingField: SettingField;

  private button: Button;

  constructor(private readonly root: HTMLElement) {
    this.settingPage = document.createElement('div');
    this.settingPage.classList.add('setting-page');
  }

  render(): HTMLElement {
    this.root.appendChild(this.settingPage);
    this.settingPage.appendChild(new SettingField(this.settingPage).render());
    this.button = new Button();
    this.settingPage.prepend(this.button.element);
    this.button.element.innerHTML = `
      <a class="button__link" href="#game">START GAME</a>
    `;
    return this.settingPage;
  }
}
export default SettingPage;
