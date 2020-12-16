import { FlyweightFactory } from './ flyweight-factory';
import { Color } from './color';
import { UnsharedConcreteFlyweight } from './unshared-concrete-flyweight';
import { Logger } from 'src/app/app.component';
export class Client {
  constructor() {
    const factory = new FlyweightFactory();

    let flyweight = factory.getFlyweight(Color.BLACK);
    flyweight.operation('Flyweight-1');

    flyweight = factory.getFlyweight(Color.WHITE);
    flyweight.operation('Flyweight-2');

    flyweight = factory.getFlyweight(Color.BLACK);
    flyweight.operation('Already Used Flyweight-1');

    const unsharedflyweight = new UnsharedConcreteFlyweight();
    unsharedflyweight.operation('Unshared');

    Logger.debug('Before This Line 3 Flyweight Were Created');
  }
}
