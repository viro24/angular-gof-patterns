import { ConcreteAggregate } from './concrete-aggregate';

export class Client {
  constructor() {
    let country = new ConcreteAggregate('Germany');
    country.addItem('Element-1');
    country.addItem('Element-2');
    country.addItem('Element-3');

    let iterator = country.createIterator();

    while (iterator.valid()) {
      let item = iterator.getItem();
      item.printNameItem();
      iterator.next();
    }
  }
}
