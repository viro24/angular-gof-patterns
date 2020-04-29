import { ConcreteColleague } from './concrete-colleague';
import { Mediator } from './mediator';

export class ConcreteMediator implements Mediator {
  private collectionColleague: Array<any> = [];

  addColleague(colleague: ConcreteColleague): void {
    this.collectionColleague.push({ path: colleague, name: colleague.getName() });
  }

  sendMessage(from: string, to: string, message: string): void {
    if (
      this.collectionColleague.find(colleague => colleague.name === to) &&
      this.collectionColleague.find(colleague => colleague.name === from)
    ) {
      let colleagueFind = this.collectionColleague.find(colleague => colleague.name === to);
      colleagueFind.path.receiverMessage(from, message);
    } else {
      console.log('No exist!');
    }
  }
}
