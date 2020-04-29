import { AbstractExpression } from './abstract-expression';

export class TerminalExpression implements AbstractExpression {
  expression: string;

  constructor(expression: string) {
    this.expression = expression;
  }

  interpret(expression: string): boolean {
    if (expression.indexOf(this.expression) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
