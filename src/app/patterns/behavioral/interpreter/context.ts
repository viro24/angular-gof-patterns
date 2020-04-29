import { AbstractExpression } from './abstract-expression';
import { AndTerminalExpression } from './and-terminal-expression';
import { OrTerminalExpression } from './or-terminal-expression';
import { TerminalExpression } from './terminal-expression';

export class Context {
  getMaleExpression(male1: string, male2: string): AbstractExpression {
    let maleExpression1 = new TerminalExpression(male1);
    let maleExpression2 = new TerminalExpression(male2);
    return new OrTerminalExpression(maleExpression1, maleExpression2);
  }

  getMarriedWomanExpression(woman1: string, woman2: string): AbstractExpression {
    let womanExpression1 = new TerminalExpression(woman1);
    let womanExpression2 = new TerminalExpression(woman2);
    return new AndTerminalExpression(womanExpression1, womanExpression2);
  }
}
