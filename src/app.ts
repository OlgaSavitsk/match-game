import { Component } from './components/component';
import { AboutPage } from './pages/about-page/about-page';

export class App implements Component {
  private readonly app: HTMLDivElement;

  constructor(private readonly rootElement: HTMLElement) {
    this.app = document.createElement('div');
    this.app.classList.add('application');
  }

  render(): HTMLElement {
    this.rootElement.appendChild(this.app);
    this.app.appendChild(new AboutPage(this.app).render());
    return this.app;
  }
}
export default App;
