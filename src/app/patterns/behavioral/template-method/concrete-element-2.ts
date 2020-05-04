import { Element } from './element';

export class ConcreteElement2 extends Element {
  public setName(): string {
    return 'Element-2';
  }

  public setPhone(): string {
    return 'XXX-XXX-222';
  }
}
