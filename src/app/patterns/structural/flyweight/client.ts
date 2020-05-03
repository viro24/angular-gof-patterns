import { FlyweightFactory } from './ flyweight-factory';
import { Color } from './color';
import { UnsharedConcreteFlyweight } from './unshared-concrete-flyweight';

export class Client {
  constructor() {
    let factory = new FlyweightFactory();

    let flyweight = factory.getFlyweight(Color.BLACK);
    flyweight.operation('Flyweight-1');

    flyweight = factory.getFlyweight(Color.WHITE);
    flyweight.operation('Flyweight-2');

    flyweight = factory.getFlyweight(Color.BLACK);
    flyweight.operation('Already Used Flyweight-1');

    let unsharedflyweight = new UnsharedConcreteFlyweight();
    unsharedflyweight.operation('Unshared');

    console.log('Before This Line 3 Flyweight Were Created');
  }
}
