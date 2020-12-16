import { Context } from './context';
import { Logger } from 'src/app/app.component';
export class Client {
  constructor() {
    const context1 = new Context();
    const isSingle = context1.getMaleExpression('Kushagra', 'Lokesh');
    Logger.debug(isSingle.interpret('Kushagra'));
    Logger.debug(isSingle.interpret('Lokesh'));
    Logger.debug(isSingle.interpret('Achint'));

    const context2 = new Context();
    const isCommitted = context2.getMarriedWomanExpression('Vikram', 'Committed');
    Logger.debug(isCommitted.interpret('Committed, Vikram'));
    Logger.debug(isCommitted.interpret('Single, Vikram'));
  }
}
