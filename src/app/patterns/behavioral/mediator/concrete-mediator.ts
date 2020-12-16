import { ConcreteColleague } from './concrete-colleague';
import { Mediator } from './mediator';
import { Logger } from 'src/app/app.component';
export class ConcreteMediator implements Mediator {
  private collectionColleague: Array<ConcreteColleague> = [];

  addColleague(colleague: ConcreteColleague): void {
    this.collectionColleague.push(colleague);
  }

  sendMessage(from: string, to: string, message: string): void {
    if (
      this.collectionColleague.find(
        (colleague) => colleague.getName() === to,
      ) &&
      this.collectionColleague.find((colleague) => colleague.getName() === from)
    ) {
      const colleagueFind = this.collectionColleague.find(
        (colleague) => colleague.getName() === to,
      );
      colleagueFind.receiverMessage(from, message);
    } else {
      Logger.debug('No Exist!');
    }
  }
}
