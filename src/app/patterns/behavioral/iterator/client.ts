import { ConcreteAggregate } from './concrete-aggregate';

export class Client {
  constructor() {
    let concreteAggregate = new ConcreteAggregate('Germany');
    concreteAggregate.addItem('Element-1');
    concreteAggregate.addItem('Element-2');
    concreteAggregate.addItem('Element-3');

    let iterator = concreteAggregate.createIterator();

    while (iterator.valid()) {
      let item = iterator.getItem();
      item.printNameItem();
      iterator.next();
    }
  }
}
