import './form-avatar.scss';
import { Component } from '../../../component';


export class FormAvatar implements Component {
  private readonly formAvatar: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.formAvatar = document.createElement('div');
    this.formAvatar.classList.add('form__avatar');
  }

  render(): HTMLElement {
    this.root.appendChild(this.formAvatar);
    return this.formAvatar;
  }
}
