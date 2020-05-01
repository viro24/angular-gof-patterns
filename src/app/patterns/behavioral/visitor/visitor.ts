import { ConcreteElement1 } from './concrete-element-1';
import { ConcreteElement2 } from './concrete-element-2';
import { ConcreteElement3 } from './concrete-element-3';

export interface Visitor {
  visit(element: ConcreteElement1 | ConcreteElement2 | ConcreteElement3): string;
}
