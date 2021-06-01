import './form-avatar.scss';
import { Component } from '../../../component';

export class FormAvatar implements Component {
  private readonly formAvatar: HTMLImageElement;

  private readonly input: HTMLInputElement;

  file: string;

  constructor(private readonly root: HTMLElement) {
    this.formAvatar = document.createElement('img');
    this.input = document.createElement('input');
    this.input.setAttribute('type', 'file');
    this.formAvatar.classList.add('form__avatar');
    this.formAvatar.setAttribute('src', this.file);
  }

  render(): HTMLImageElement {
    this.root.appendChild(this.formAvatar);
    this.root.appendChild(this.input);
    return this.formAvatar;
  }
}
