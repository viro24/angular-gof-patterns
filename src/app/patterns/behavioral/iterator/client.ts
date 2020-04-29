import { ConcreteAggregate } from './concrete-aggregate';

export class Client {
  constructor() {
    let country = new ConcreteAggregate('Germany');
    country.addItem('First');
    country.addItem('Second');
    country.addItem('Third');

    let iterator = country.createIterator();

    while (iterator.valid()) {
      let item = iterator.getItem();
      item.printNameItem();
      iterator.next();
    }
  }
}
