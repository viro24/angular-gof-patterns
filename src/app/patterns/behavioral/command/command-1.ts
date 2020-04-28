import { ConcreteCommand } from './concrete-command';

export class Command1 extends ConcreteCommand {
  public execute(): void {
    this.receiver.action('save');
  }
}
