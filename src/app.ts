import { Header } from "./components/header/header";
import { Game } from "./components/game/game";
import { ImageCategoryModel } from './models/image-category-model';
import { Logo } from "./components/logo/logo";

export class App {
  private readonly game: Game;
  public header: Header;
  private readonly logo: Logo;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
    this.header = new Header();
    this.rootElement.prepend(this.header.element);
  }

 async start() {
    const response = await fetch('/images.json');
    const categories: ImageCategoryModel[] = await response.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.initGame(images);
  }
}
