import { Element } from './element';
import { Strategy } from './strategy';

export class ConcreteStrategy2 implements Strategy {
  public execute(element: Element): string {
    return element.getName() + ' Execute Strategy-2';
  }
}
