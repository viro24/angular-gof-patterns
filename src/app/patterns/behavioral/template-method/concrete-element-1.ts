import { Element } from './element';

export class ConcreteElement1 extends Element {
  public setName(): string {
    return 'Element-1';
  }

  public setPhone(): string {
    return 'XXX-XXX-111';
  }
}
