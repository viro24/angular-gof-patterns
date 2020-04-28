import { Receiver } from './receiver';

export abstract class ConcreteCommand {
  protected receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  public abstract execute(): void;
}
