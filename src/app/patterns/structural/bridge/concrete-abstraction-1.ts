import { Abstraction } from './abstraction';
import { Implementor } from './implementor';

export class ConcreteAbstraction1 extends Abstraction {
  constructor(implementor: Implementor) {
    super(implementor);
  }

  public print(): void {
    super.printMessageWelcome();
    super.printMessageEnd();
  }
}
