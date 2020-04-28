import { ConcreteCommand } from './concrete-command';

export class Command3 extends ConcreteCommand {
  public execute(): void {
    this.receiver.action('run');
  }
}
