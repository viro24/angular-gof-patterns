import { Aggregate } from './aggregate';
import { ConcreteIterator } from './concrete-iterator';
import { Item } from './item';

export class ConcreteAggregate implements Aggregate {
  private collectionItems: Array<Item> = [];
  private countryItem: string;

  constructor(countryItem: string) {
    this.countryItem = countryItem;
  }

  addItem(nameItem: string): void {
    this.collectionItems.push(new Item(nameItem, this.countryItem));
  }

  createIterator(): ConcreteIterator {
    return new ConcreteIterator(this.collectionItems);
  }
}
