import { ConcreteFactory } from './concrete-factory';

export class Client {
  constructor() {
    let concreteFactory1 = new ConcreteFactory();
    let createProductA = concreteFactory1.createProductA();
    createProductA.showName();

    let concreteFactory2 = new ConcreteFactory();
    let createProductB = concreteFactory2.createProductB();
    createProductB.showName();
  }
}
