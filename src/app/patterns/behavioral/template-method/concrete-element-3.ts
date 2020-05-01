import { Element } from './element';

export class ConcreteElement3 extends Element {
  protected setName(): string {
    return 'Element-3';
  }

  protected setPhone(): string {
    return 'XXX-XXX-333';
  }
}
