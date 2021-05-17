
export class BaseComponent {
  readonly element: HTMLElement|HTMLCanvasElement;

  constructor (tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = []) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }
}
