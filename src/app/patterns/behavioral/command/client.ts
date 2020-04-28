import { Command1 } from './command-1';
import { Command2 } from './command-2';
import { Command3 } from './command-3';
import { Invoker } from './invoker';
import { Receiver } from './receiver';

export class Client {
  constructor() {
    let receiver = new Receiver();

    let command1 = new Command1(receiver);
    let command2 = new Command2(receiver);
    let command3 = new Command3(receiver);

    let invoker = new Invoker();

    invoker.execute(command1);
    invoker.execute(command2);

    invoker.undo();
  }
}
