import { Logger } from 'src/app/app.component';
import { Abstraction } from './abstraction';
import { Implementor } from './implementor';

export class ConcreteAbstraction2 extends Abstraction {
  constructor(implementor: Implementor) {
    super(implementor);
  }

  public print(): void {
    this.showMessageRevert();
    super.printMessageEnd();
    super.printMessageWelcome();
  }

  private showMessageRevert(): void {
    Logger.debug('Now... Revert');
  }
}
