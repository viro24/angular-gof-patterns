export class Item {
  private nameItem: string;
  private countryItem: string;

  constructor(nameItem: string, countryItem: string) {
    this.nameItem = nameItem;
    this.countryItem = countryItem;
  }

  printNameItem(): void {
    console.log('My name is ' + this.nameItem + ' from ' + this.countryItem);
  }
}
