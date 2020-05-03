import { AbstractFactory } from './abstract-factory';
import { AbstractProduct } from './abstract-product';
import { CreateProductA } from './concrete-product-a';
import { CreateProductB } from './concrete-product-b';

export class ConcreteFactory implements AbstractFactory {
  public createProductA(): AbstractProduct {
    return new CreateProductA('ConcreteProduct-A');
  }

  public createProductB(): AbstractProduct {
    return new CreateProductB('ConcreteProduct-B');
  }
}
