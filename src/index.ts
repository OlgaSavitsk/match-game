import './styles.scss';
import { App } from './app';
import { GamePage } from './pages/game-page/game-page';
import { AboutPage } from './pages/about-page/about-page';
import { Header } from './components/header/header';
import { ScorePage } from './pages/score/score';
import { SettingPage } from './pages/setting/setting';
import { DataBase } from './components/storage';

const db = new DataBase()

let appElement: HTMLElement | null = document.getElementById('app');
if (!appElement) throw Error('App root element not found');

window.onload = () => {
const appElement = document.getElementById('app');
if (!appElement) throw Error('App root element not found');
new Header(appElement).render()
new App(appElement).render();
new DataBase().init('olgasav');
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
    new ScorePage(app).render();
    }
  if(currentRoute.name === 'setting') {
    new SettingPage(app).render();
    }
    if(currentRoute.name === 'game') {
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


 /*  const iDB = window.indexedDB;
  let database: IDBDatabase | null = null;

  let openRequest = iDB.open('olgasav');
  openRequest.onupgradeneeded = () => {
    let database = openRequest.result;
    console.log('running')
    let store = database.createObjectStore('users', {keyPath: 'id', autoIncrement: true});
    store.createIndex('name', 'name');
    store.createIndex('surname', 'surname');
    store.createIndex('email', 'email', {unique: true});
    store.createIndex('score', 'total');
  }

  openRequest.onsuccess = () => {
    database = openRequest.result;
    let transaction = database.transaction('users', 'readwrite')
    let store = transaction.objectStore('users');
    let result = store.add({name: 'name', surname: 'surname', email: 'emaila', score: '45'});
    transaction.oncomplete = () => {
      console.log('complete',result.result);
    }
    transaction.onerror = () => {
      console.log('error', result.error);
    }
    transaction.onabort = () => {
      console.log('abort');
    }
  } */

/* let el = document.createElement('button');
el.textContent ='list';
document.body.append(el);
el.onclick = () => {
  let transaction = database!.transaction('users', 'readonly');
      let store = transaction.objectStore('users');
      let result =store. getAll();

      transaction.oncomplete = () => {
        console.log(result.result)
      }
}

let elem = document.createElement('button');
elem.textContent ='filter';
document.body.append(elem);
elem.onclick = () => {

  let transaction = database!.transaction('users', 'readonly');
      let store = transaction.objectStore('users');
      let result =store.index('email').openCursor(null, 'next');
      let resData: Array<any> = []

      result.onsuccess = () => {

  let cursor = result.result;

  if(cursor) {
    console.log(cursor.value)
    cursor.continue();
  }

  if(cursor?.value.email[0] == 'e') {
    resData.push(cursor?.value)
  }
}
      transaction.oncomplete = () => {
        console.log(result.result)
      }
}
 */
// let deleteRequest = indexedDB.deleteDatabase('olgasav')



