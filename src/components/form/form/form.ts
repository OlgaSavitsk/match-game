import './form.scss';
import { Component } from '../../../component';
import { Input } from './input';
import { ButtonAdd } from '../button-form/button-add';
import { ButtonForm } from '../button-form/button-form';
import { DataBase } from '../../../components/storage';

export class Form implements Component {
  private form: HTMLElement;
  private inputs: Input[];
  private input: Input;
  public regName: RegExp = /^[a-z0-9_-]{3,16}$/;
  private placeholder: string;
  private name: string;
  private values: string;
  validate: ((values: string) => boolean);
  text: string;


  constructor(private readonly root: HTMLElement, private callback: Function/* , private readonly db: DataBase */) {
    // this.callback();
    this.form = document.createElement('form');
    this.inputs = [];
    this.form.addEventListener('input', (e) => {
    var event: Event | undefined;
    event?.preventDefault()
    console.log('submit')
  });
  }

  render(): HTMLElement {
    this.root.appendChild(this.form);
      this.form.appendChild(new Input(this.form, 'Jessie', 'username', 'First Name'/* , this.onValidate */).render()),
      this.form.append(new Input(this.form, 'Doe', 'surname', 'Last Name'/* , this.onValidate */).render()),
      this.form.append(new Input(this.form, 'Jessie.Doe@gmail.com', 'email', 'E-mail'/* , this.onValidate */).render());
      this.form.appendChild(new ButtonForm(this.form).render()).onclick = () => {
       // this.root.innerHTML = '';
       // this.popupCover.element.classList.remove('show')
        };
      return this.form;
  }
}
