import './styles.scss';
import { App } from './app';
import { AboutPage } from './pages/about-page/about-page';
import { GamePage } from './pages/game-page/game-page';
import { Header } from './components/header/header';
import { ScorePage } from './pages/score/score';
import { SettingPage } from './pages/setting/setting';
import { DataBase } from './components/indexedDB';

const db = new DataBase();

let appElement: HTMLElement | null = document.getElementById('app');
if (!appElement) throw Error('App root element not found');

window.onload = () => {
const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');
  new Header(appElement).render();
  new App(appElement).render();
  new DataBase().init('olgasav');
}

window.onpopstate = () => {
  let app: HTMLElement | null = document.querySelector('.application');
  if (!app) throw Error('Application root element not found');

  let currentRoutName = window.location.hash.slice(1);
  let currentRoute = routes.find(p => p.name === currentRoutName);
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
