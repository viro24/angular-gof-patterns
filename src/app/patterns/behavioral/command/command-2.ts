import { ConcreteCommand } from './concrete-command';

export class Command2 extends ConcreteCommand {
  public execute(): void {
    this.receiver.action('load');
  }
}
