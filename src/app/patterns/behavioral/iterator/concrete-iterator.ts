import { Item } from './item';
import { Iterator } from './iterator';

export class ConcreteIterator implements Iterator {
  private collectionItems: Array<Item> = [];
  private position = 0;

  constructor(collectionItems: Array<Item>) {
    this.collectionItems = collectionItems;
  }

  getIterator(): Array<Item> {
    return this.collectionItems;
  }

  getItem(): Item {
    return this.collectionItems[this.position];
  }

  next(): Item {
    let item = this.getItem();
    this.position++;
    return item;
  }

  valid(): boolean {
    return this.position < this.collectionItems.length;
  }
}
