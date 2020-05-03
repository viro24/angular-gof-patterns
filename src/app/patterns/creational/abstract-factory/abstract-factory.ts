import { AbstractProduct } from './abstract-product';

export interface AbstractFactory {
  createProductA(): AbstractProduct;
  createProductB(): AbstractProduct;
}
