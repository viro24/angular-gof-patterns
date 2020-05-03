import { AbstractProduct } from './abstract-product';

export class CreateProductA implements AbstractProduct {
  private nameProduct: string;

  public constructor(nameProduct: string) {
    this.nameProduct = nameProduct;
  }

  public showName(): void {
    console.log(this.nameProduct);
  }
}
