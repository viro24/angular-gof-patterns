import { ConcreteColleague } from './concrete-colleague';
import { Mediator } from './mediator';

export class ConcreteMediator implements Mediator {
  private collectionColleague: Array<ConcreteColleague> = [];

  addColleague(colleague: ConcreteColleague): void {
    this.collectionColleague.push(colleague);
  }

  sendMessage(from: string, to: string, message: string): void {
    if (
      this.collectionColleague.find(colleague => colleague.getName() === to) &&
      this.collectionColleague.find(colleague => colleague.getName() === from)
    ) {
      let colleagueFind = this.collectionColleague.find(colleague => colleague.getName() === to);
      colleagueFind.receiverMessage(from, message);
    } else {
      console.log('No Exist!');
    }
  }
}
