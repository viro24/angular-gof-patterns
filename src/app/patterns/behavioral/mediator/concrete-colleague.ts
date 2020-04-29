import { Colleague } from './colleague';
import { ConcreteMediator } from './concrete-mediator';

export class ConcreteColleague implements Colleague {
  private nameColleague: string;
  private mediator: ConcreteMediator;

  constructor(mediator: ConcreteMediator) {
    this.mediator = mediator;
  }

  getName() {
    return this.nameColleague;
  }

  setName(nameColleague: string) {
    this.nameColleague = nameColleague;
  }

  sendMessage(to: string, message: string): void {
    this.mediator.sendMessage(this.nameColleague, to, message);
  }

  receiverMessage(from: string, message: string): void {
    console.log('The colleage "' + from + '" says ' + message);
  }
}
