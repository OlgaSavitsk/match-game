import '../setting.scss';
import { Component } from '../../../components/component';

export class SelectBlockCard implements Component {
  private readonly selectBlockCard: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.selectBlockCard = document.createElement('div');
    this.selectBlockCard.classList.add('selected__block');
    this.selectBlockCard.innerHTML = `
      <h3>Game cards</h3>
      <select id="selected-card">
        <option>select game cards type</option>
        <option value="animals">Animals</option>
        <option value="birds">Birds</option>
      </select>
    `;
  }

  render() {
    this.root.appendChild(this.selectBlockCard);
    return this.selectBlockCard;
  }
}
