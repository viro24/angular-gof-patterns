import { ConcreteHandler1 } from './concrete-handler1';
import { ConcreteHandler2 } from './concrete-handler2';
import { ConcreteHandler3 } from './concrete-handler3';

export class Client {
  public handleRequest(process: string): void {
    let concreteHandler1 = new ConcreteHandler1();
    let concreteHandler2 = new ConcreteHandler2();
    let concreteHandler3 = new ConcreteHandler3();

    concreteHandler1.setSuccessor(concreteHandler2);
    concreteHandler2.setSuccessor(concreteHandler3);

    try {
      concreteHandler1.handleRequest(process);
    } catch (e) {
      console.log('Can not trigger Handler ' + process);
      console.log(e);
    }
  }
}
