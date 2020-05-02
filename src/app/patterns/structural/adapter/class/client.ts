import { ConcreteAdapter } from './concrete-adapter';

export class Client {
  constructor() {
    let concreteAdapter = new ConcreteAdapter();

    concreteAdapter.save('Good Morning!');
    concreteAdapter.save('Good Afternoon!');
    concreteAdapter.save('Good Night!');

    concreteAdapter.print();
  }
}
