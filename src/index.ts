import './styles.scss';
import { App } from './app';
// import { Header } from './components/header/header'

window.onload = () => {
const appElement = document.getElementById('app');
if (!appElement) throw Error('App root element not found');
// const header = new Header();
new App(appElement).start();

}
