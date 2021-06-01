import './score-list.scss';
import { Component } from '../../component';

export class ScoreList implements Component {
  private readonly scoreList: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.scoreList = document.createElement('ul');
    this.scoreList.classList.add('score__list');
    this.scoreList.innerHTML = `
      <li class="score__item">
        <div class="score__avatar"></div>
        <p class="score__name">Nicci Troiani</p>
        <p class="score__email">nicci@gmail.com</p>
        <p  class="score__place">Score: 456</p>
    </li>
    `;
  }

  render() {
    this.root.appendChild(this.scoreList);
    return this.scoreList;
  }
}
