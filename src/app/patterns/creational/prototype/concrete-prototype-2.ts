import { Prototype } from './prototype';

export class ConcretePrototype2 extends Prototype {
  constructor() {
    super();
    super.setPrototypeName('Prototype-2');
  }
}
