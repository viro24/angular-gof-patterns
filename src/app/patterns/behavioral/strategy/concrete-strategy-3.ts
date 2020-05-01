import { Element } from './element';
import { Strategy } from './strategy';

export class ConcreteStrategy3 implements Strategy {
  public execute(element: Element): string {
    return element.getName() + ' execute Strategy 3';
  }
}
