import './rule-start.scss';
import { Component } from '../../component';

export class RuleStart implements Component {
  private readonly ruleStart: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.ruleStart = document.createElement('div');
    this.ruleStart.classList.add('rules__block_start');
    this.ruleStart.innerHTML = `
    <div class="rules__number">3</div>
    <p class="rules__text">Start you new game! Remember card positions and match it before times up.</p>
    `;
  }

  render() {
    this.root.appendChild(this.ruleStart);
    return this.ruleStart;
  }
}
