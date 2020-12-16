import { Logger } from 'src/app/app.component';
import { ConcreteElement1 } from './concrete-element-1';
import { ConcreteElement2 } from './concrete-element-2';
import { ConcreteElement3 } from './concrete-element-3';
import { ConcreteVisitor1 } from './concrete-visitor-1';
import { ConcreteVisitor2 } from './concrete-visitor-2';

export class Client {
  constructor() {
    let concreteElement1 = new ConcreteElement1();
    let concreteElement2 = new ConcreteElement2();
    let concreteElement3 = new ConcreteElement3();

    let concreteVisitor1 = new ConcreteVisitor1();
    let concreteVisitor2 = new ConcreteVisitor2();

    Logger.debug(
      concreteElement1.accept(concreteVisitor1) +
        concreteElement2.accept(concreteVisitor1) +
        concreteElement3.accept(concreteVisitor1)
    );
    Logger.debug(
      concreteElement1.accept(concreteVisitor2) +
        concreteElement2.accept(concreteVisitor2) +
        concreteElement3.accept(concreteVisitor2)
    );
  }
}
