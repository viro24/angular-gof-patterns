import { ConcreteAdapter } from './concrete-adapter';

export class Client {
  constructor() {
    let adapter = new ConcreteAdapter();

    adapter.save('Good Morning!');
    adapter.save('Good Afternoon!');
    adapter.save('Good Night!');

    adapter.print();
  }
}
