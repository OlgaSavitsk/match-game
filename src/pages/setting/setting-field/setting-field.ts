import '../setting.scss';
import { Component } from '../../../components/component';
import { SelectBlockCard } from '../select-block/select-card';
import { SelectBlockLavel } from '../select-block/select-lavel';

export class SettingField implements Component {
  private readonly settingField: HTMLElement;

  private selectBlockCard: SelectBlockCard;

  private selectBlockLavel: SelectBlockLavel;

  public settingAr: string;

  constructor(private readonly root: HTMLElement) {
    this.settingField = document.createElement('div');
    this.settingField.classList.add('setting__field');
    this.settingAr;
  }

  getSettingValue() {
    const selectCard: HTMLSelectElement | null = document.querySelector('#selected-card');
    const selectLavel: HTMLSelectElement | null = document.querySelector('#selected-lavel');
    if (!selectCard) throw Error('App root element not found');
    if (!selectLavel) throw Error('App root element not found');
    selectCard.addEventListener('change', () => {
      localStorage.setItem('card-category', selectCard.value);
    });
    selectLavel.addEventListener('change', () => {
      localStorage.setItem('lavel-category', selectLavel.value);
    });
  }

  render() {
    this.root.appendChild(this.settingField);
    this.settingField.appendChild(new SelectBlockCard(this.settingField).render());
    this.settingField.appendChild(new SelectBlockLavel(this.settingField).render());
    this.getSettingValue();
    return this.settingField;
  }
}
