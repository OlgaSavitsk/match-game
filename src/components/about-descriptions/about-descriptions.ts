import './about-descriptions.scss';
import { Rules } from '../rules/rules';
import { Component } from '../../component';

export class AboutDescriptions implements Component {
  private readonly aboutDescriptions: HTMLElement;


  constructor(private readonly root: HTMLElement) {
    this.aboutDescriptions = document.createElement('div');
    this.aboutDescriptions.classList.add('description');
    this.aboutDescriptions.innerHTML = `
    <div class="description__registr"></div>
    <div class="description__setting"></div>
    <div class="description__card-field"></div>
    `;
  }

  render() {
    this.root.appendChild(this.aboutDescriptions);
    return this.aboutDescriptions;
  }
}
