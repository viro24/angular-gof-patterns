import { Implementor } from './implementor';

export abstract class Abstraction {
  private implementor: Implementor;

  constructor(implementor: Implementor) {
    this.implementor = implementor;
  }

  protected printMessageWelcome(): void {
    this.implementor.printMessageWelcome();
  }

  protected printMessageEnd(): void {
    this.implementor.printMessageEnd();
  }

  public abstract print(): void;
}
