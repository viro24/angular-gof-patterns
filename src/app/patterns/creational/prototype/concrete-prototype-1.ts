import { Prototype } from './prototype';

export class ConcretePrototype1 extends Prototype {
  constructor() {
    super();
    super.setPrototypeName('Prototype-1');
  }
}
