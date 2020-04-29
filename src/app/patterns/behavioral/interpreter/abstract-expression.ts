export interface AbstractExpression {
  interpret(expression: string): boolean;
}
