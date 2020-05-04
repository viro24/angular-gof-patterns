import { ConcretePrototype1 } from './concrete-prototype-1';
import { ConcretePrototype2 } from './concrete-prototype-2';
import { Prototype } from './prototype';

export class Client {
  constructor() {
    let prototype1: Prototype = new ConcretePrototype1();
    let prototype2: Prototype = new ConcretePrototype2();

    let prototypeClone1 = prototype1.clone();
    let prototypeClone2 = prototype2.clone();

    console.log(prototype1.getPrototypeName() + ' - ' + prototype2.getPrototypeName());
    console.log(prototypeClone1.getPrototypeName() + ' - ' + prototypeClone2.getPrototypeName());

    prototypeClone1.setPrototypeName('Change at clone 1');
    prototypeClone2.setPrototypeName('Change at clone 2');

    console.log(prototype1.getPrototypeName() + ' - ' + prototype2.getPrototypeName());
    console.log(prototypeClone1.getPrototypeName() + ' - ' + prototypeClone2.getPrototypeName());
  }
}
