import { Element } from './element';
import { Visitor } from './visitor';

export class ConcreteElement3 extends Element {
  private name = 'Element3';

  public accept(visitor: Visitor): string {
    return visitor.visit(this);
  }

  public getName(): string {
    return this.name;
  }
}
