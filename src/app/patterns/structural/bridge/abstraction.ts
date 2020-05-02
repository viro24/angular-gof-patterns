import { Implementor } from './implementor';

export abstract class Abstraction {
  private implementor: Implementor;

  constructor(implementor: Implementor) {
    this.implementor = implementor;
  }

  public abstract print(): void;

  protected printMessageWelcome(): void {
    this.implementor.printMessageWelcome();
  }

  protected printMessageEnd(): void {
    this.implementor.printMessageEnd();
  }
}
