import '../setting.scss';
import { Component } from '../../../component';

export class SelectBlockLavel implements Component {
  private readonly selectBlockLavel: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.selectBlockLavel = document.createElement('div');
    this.selectBlockLavel.classList.add('selected__block');
    this.selectBlockLavel.innerHTML = `
      <h3>Difficulty</h3>
      <select id="selected-lavel">
      <option>select game type</option>
      <option value="4x4">4x4</option>
      <option class="6x6">6x6</option>
      </select>
    `;
  }

  render() {
    this.root.appendChild(this.selectBlockLavel);
    return this.selectBlockLavel;
  }
}
