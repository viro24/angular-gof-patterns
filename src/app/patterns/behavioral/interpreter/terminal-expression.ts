import { AbstractExpression } from './abstract-expression';

export class TerminalExpression implements AbstractExpression {
  private expression: string;

  constructor(expression: string) {
    this.expression = expression;
  }

  public interpret(expression: string): boolean {
    if (expression.indexOf(this.expression) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
