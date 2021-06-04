import './score-list.scss';
import { Component } from '../../../components/component';
import { DataBase } from '../../../components/indexedDB';

export class ScoreList implements Component {
  public scoreList: HTMLUListElement;

  private db: DataBase = new DataBase();

  constructor(private readonly root: HTMLElement) {
    this.scoreList = document.createElement('ul');
    this.scoreList.setAttribute('id', 'scorelist');
    // this.scoreList.classList.add('score__list');
    // this.scoreList.innerHTML = `<div class="score__avatar"></div>`;
  }

  render(): HTMLUListElement {
  //  this.root.appendChild(this.scoreList);
    return this.scoreList;
  }
}
