import { ConcreteProduct } from './concrete-product';
import { Creator } from './creator';
import { Product } from './product';

export class ConcreteCreator extends Creator {
  public createProduct(): Product {
    return new ConcreteProduct();
  }
}
