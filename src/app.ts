import { CardField } from "./components/card-field/card-field";

export class App {
  private readonly cardField: CardField;

  constructor(private readonly rootElement: HTMLElement) {
    this.cardField = new CardField();
    this.rootElement.appendChild(this.cardField.element);
  }
 }
