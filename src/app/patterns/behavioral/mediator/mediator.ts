import { ConcreteColleague } from './concrete-colleague';

export interface Mediator {
  addColleague(colleague: ConcreteColleague): void;
  sendMessage(from: string, to: string, message: string): void;
}
