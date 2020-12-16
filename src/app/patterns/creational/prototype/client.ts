import { Logger } from 'src/app/app.component';
import { ConcretePrototype1 } from './concrete-prototype-1';
import { ConcretePrototype2 } from './concrete-prototype-2';
import { Prototype } from './prototype';

export class Client {
  constructor() {
    let prototype1: Prototype = new ConcretePrototype1();
    let prototype2: Prototype = new ConcretePrototype2();

    let prototypeClone1 = prototype1.clone();
    let prototypeClone2 = prototype2.clone();

    Logger.debug(
      prototype1.getPrototypeName() + ' - ' + prototype2.getPrototypeName()
    );
    Logger.debug(
      prototypeClone1.getPrototypeName() +
        ' - ' +
        prototypeClone2.getPrototypeName()
    );

    prototypeClone1.setPrototypeName('Change at clone 1');
    prototypeClone2.setPrototypeName('Change at clone 2');

    Logger.debug(
      prototype1.getPrototypeName() + ' - ' + prototype2.getPrototypeName()
    );
    Logger.debug(
      prototypeClone1.getPrototypeName() +
        ' - ' +
        prototypeClone2.getPrototypeName()
    );
  }
}
