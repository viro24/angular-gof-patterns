import { Context } from './context';

export class Client {
  constructor() {
    let context1 = new Context();
    let isSingle = context1.getMaleExpression('Kushagra', 'Lokesh');
    console.log(isSingle.interpret('Kushagra'));
    console.log(isSingle.interpret('Lokesh'));
    console.log(isSingle.interpret('Achint'));

    let context2 = new Context();
    let isCommitted = context2.getMarriedWomanExpression('Vikram', 'Committed');
    console.log(isCommitted.interpret('Committed, Vikram'));
    console.log(isCommitted.interpret('Single, Vikram'));
  }
}
