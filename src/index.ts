import './styles.scss';
import { App } from './app';
import { GamePage } from './pages/game-page/game-page';
import { AboutPage } from './pages/about-page/about-page';
import { Header } from './components/header/header';

let appElement: HTMLElement | null = document.getElementById('app');
if (!appElement) throw Error('App root element not found');

window.onload = () => {
const appElement = document.getElementById('app');
if (!appElement) throw Error('App root element not found');
new Header(appElement).render();
new App(appElement).render();
}

window.onpopstate = () => {
let app: HTMLElement | null = document.querySelector('.application')
  if (!app) throw Error('Application root element not found');

  let currentRoutName = window.location.hash.slice(1);
  let currentRoute = routes.find(p => p.name === currentRoutName);
  if (!currentRoute) throw Error('CurrentRoute root element not found');

  while (app.firstChild){
    app.removeChild(app.firstChild);
  }

  if(currentRoutName === '') {
    new AboutPage(app).render();
  }
  if(currentRoute.name === 'best') {
    new GamePage(app).render();
    }
};

const routes = [
  {
    name: '',
   component: new AboutPage(appElement),
    },
    {
      name: 'best',
    component: new GamePage(appElement),
    },
    {
      name: 'setting',
     component: new AboutPage(appElement),
      },
  ];
