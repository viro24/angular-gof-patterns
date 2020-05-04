import { Product } from './product';

export class ConcreteProduct implements Product {
  private fieldFromPartA: string;
  private fieldFromPartB: string;

  public getFieldFromPartA(): string {
    return this.fieldFromPartA;
  }

  public setFieldFromPartA(fieldFromPartA: string): void {
    this.fieldFromPartA = fieldFromPartA;
  }

  public getFieldFromPartB(): string {
    return this.fieldFromPartB;
  }

  public setFieldFromPartB(fieldFromPartB: string): void {
    this.fieldFromPartB = fieldFromPartB;
  }
}
