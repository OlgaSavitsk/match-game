import './styles.scss';
import { App } from './app';
import { Header } from './components/header/header';
import { DataBase } from './components/indexedDB';
import { AboutPage } from './pages/about-page/about-page';
import { GamePage } from './pages/game-page/game-page';
import { ScorePage } from './pages/score/score';
import { SettingPage } from './pages/setting/setting';

const db = new DataBase();

const appElement: HTMLElement | null = document.getElementById('app');
if (!appElement) throw Error('App root element not found');

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');
  new Header(appElement).render();
  new App(appElement).render();
 // new DataBase().init('olgasav');
};

window.onpopstate = () => {
  const app: HTMLElement | null = document.querySelector('.application');
  if (!app) throw Error('Application root element not found');

  const currentRoutName = window.location.hash.slice(1);
  const currentRoute = routes.find(p => p.name === currentRoutName);
  if (!currentRoute) throw Error('CurrentRoute root element not found');

  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }

  if (currentRoutName === '') {
    new AboutPage(app).render();
  }
  if (currentRoute.name === 'best') {
    new ScorePage(app).render();
  }
  if (currentRoute.name === 'setting') {
    new SettingPage(app).render();
  }
  if (currentRoute.name === 'game') {
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
    component: new ScorePage(appElement),
  },
  {
    name: 'setting',
    component: new SettingPage(appElement),
  },
  {
    name: 'game',
    component: new GamePage(appElement),
  },
];
