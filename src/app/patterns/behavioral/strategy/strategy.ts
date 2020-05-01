import { Element } from './element';

export interface Strategy {
  execute(element: Element): string;
}
