import { Logger } from 'src/app/app.component';
import { AbstractProduct } from './abstract-product';

export class CreateProductA implements AbstractProduct {
  private nameProduct: string;

  public constructor(nameProduct: string) {
    this.nameProduct = nameProduct;
  }

  public showName(): void {
    Logger.debug(this.nameProduct);
  }
}
