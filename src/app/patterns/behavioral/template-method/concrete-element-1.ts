import { Element } from './element';

export class ConcreteElement1 extends Element {
  protected setName(): string {
    return 'Element-1';
  }

  protected setPhone(): string {
    return 'XXX-XXX-111';
  }
}
