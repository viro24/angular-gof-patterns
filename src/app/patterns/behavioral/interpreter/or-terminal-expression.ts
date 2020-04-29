import { AbstractExpression } from './abstract-expression';

export class OrTerminalExpression implements AbstractExpression {
  expression1: AbstractExpression;
  expression2: AbstractExpression;

  constructor(expression1: AbstractExpression, expression2: AbstractExpression) {
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(expression: string): boolean {
    return this.expression1.interpret(expression) || this.expression2.interpret(expression);
  }
}
