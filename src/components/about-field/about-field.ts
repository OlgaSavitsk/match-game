import './about-field.scss';
import { Component } from '../../component';
import { AboutContainer } from '../about-container/about-container';

export class AboutField implements Component {
  private readonly aboutField: HTMLElement;


  constructor(private readonly root: HTMLElement) {
    this.aboutField = document.createElement('div');
    this.aboutField.classList.add('game-field');
    this.aboutField.innerHTML = `
      <h2>How to play?</h2>
    `;
  }

  render(): HTMLElement {
    this.root.appendChild(this.aboutField);
    this.aboutField.appendChild(new AboutContainer(this.aboutField).render());
    return this.aboutField;
  }
}
