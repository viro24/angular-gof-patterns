import { ConcreteHandler1 } from './concrete-handler-1';
import { ConcreteHandler2 } from './concrete-handler-2';
import { ConcreteHandler3 } from './concrete-handler-3';

export class Client {
  public handleRequest(action: string): void {
    let concreteHandler1 = new ConcreteHandler1();
    let concreteHandler2 = new ConcreteHandler2();
    let concreteHandler3 = new ConcreteHandler3();

    concreteHandler1.setSuccessor(concreteHandler2);
    concreteHandler2.setSuccessor(concreteHandler3);

    try {
      concreteHandler1.handleRequest(action);
    } catch (e) {
      console.log('Can Not Trigger Handler ' + action);
      // console.log(e);
    }
  }
}
