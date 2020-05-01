import { AbstractExpression } from './abstract-expression';

export class AndTerminalExpression implements AbstractExpression {
  private expression1: AbstractExpression;
  private expression2: AbstractExpression;

  constructor(expression1: AbstractExpression, expression2: AbstractExpression) {
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  public interpret(expression: string): boolean {
    return this.expression1.interpret(expression) && this.expression2.interpret(expression);
  }
}
