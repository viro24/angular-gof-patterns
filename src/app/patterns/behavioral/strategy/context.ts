import { Element } from './element';
import { Strategy } from './strategy';

export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public executeStrategy(element: Element): string {
    return this.strategy.execute(element);
  }
}
