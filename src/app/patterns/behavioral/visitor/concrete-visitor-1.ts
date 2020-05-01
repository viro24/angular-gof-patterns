import { ConcreteElement1 } from './concrete-element-1';
import { ConcreteElement2 } from './concrete-element-2';
import { ConcreteElement3 } from './concrete-element-3';
import { Visitor } from './visitor';

export class ConcreteVisitor1 implements Visitor {
  public visit(element: ConcreteElement1 | ConcreteElement2 | ConcreteElement3): string {
    return this[element.getName()](element);
  }

  public Element1(element: ConcreteElement1): string {
    return 'Hello! From Visitor-1 To ' + element.getName() + '\n';
  }

  public Element2(element: ConcreteElement2): string {
    return 'Hello! From Visitor-1 To ' + element.getName() + '\n';
  }

  public Element3(element: ConcreteElement3): string {
    return 'Hello! From Visitor-1 To ' + element.getName() + '\n';
  }
}
