import { Element } from './element';

export class ConcreteElement2 extends Element {
  protected setName(): string {
    return 'Element-2';
  }

  protected setPhone(): string {
    return 'XXX-XXX-222';
  }
}
