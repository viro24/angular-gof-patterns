import { ConcreteProduct } from './concrete-product';
import { Product } from './product';

export abstract class Creator {
  public genProductValue(): number {
    let product = new ConcreteProduct();
    return product.getValue();
  }

  public abstract createProduct(): Product;
}
