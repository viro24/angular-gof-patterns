import { Element } from './element';
import { Visitor } from './visitor';

export class ConcreteElement1 extends Element {
  private name = 'Element1';

  public accept(visitor: Visitor): string {
    return visitor.visit(this);
  }

  public getName(): string {
    return this.name;
  }
}
