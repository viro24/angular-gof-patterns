import { Logger } from 'src/app/app.component';
export class Item {
  private nameItem: string;
  private countryItem: string;

  constructor(nameItem: string, countryItem: string) {
    this.nameItem = nameItem;
    this.countryItem = countryItem;
  }

  printNameItem(): void {
    Logger.debug('My Name Is ' + this.nameItem + ' From ' + this.countryItem);
  }
}
