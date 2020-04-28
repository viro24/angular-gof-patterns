import { ConcreteCommand } from './concrete-command';

export class Invoker {
  private history: Array<ConcreteCommand> = [];

  public undo(): void {
    this.history.pop();
    this.history[this.history.length - 1].execute();
  }

  public execute(command: ConcreteCommand): void {
    this.history.push(command);
    command.execute();
  }
}
