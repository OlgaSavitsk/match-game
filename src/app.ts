import { Component } from "component";
import { Header } from "./components/header/header";
import { AboutPage } from "./pages/about-page/about-page";

export class App implements Component{
  private readonly app: HTMLDivElement;
  header: Header;

  constructor (private readonly rootElement: HTMLElement) {
    this.app = document.createElement('div');
    this.app.classList.add('application');
  }

  render(): HTMLElement {
    this.rootElement.appendChild(this.app);
    //this.appElement.appendChild(new GamePage(this.appElement).render());
    this.app.appendChild(new AboutPage(this.app).render())
    return this.app;
  }

}
