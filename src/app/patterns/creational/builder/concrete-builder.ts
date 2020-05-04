import { Builder } from './builder';
import { ConcreteProduct } from './concrete-product';

export class ConcreteBuilder implements Builder {
  private product = new ConcreteProduct();

  public buildPartA(): void {
    return this.product.setFieldFromPartA('ConcreteProduct-A');
  }

  public buildPartB(): void {
    return this.product.setFieldFromPartB('ConcreteProduct-B');
  }

  public getResult(): ConcreteProduct {
    return this.product;
  }
}
