import { Product } from './product';

export class ConcreteProduct implements Product {
  public getValue(): number {
    return Math.floor(Math.random() * 10);
  }
}
