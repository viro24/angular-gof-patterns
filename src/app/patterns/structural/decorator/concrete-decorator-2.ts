import { Component } from './component';
import { Decorator } from './decorator';

export class ConcreteDecorator2 extends Decorator {
  constructor(component: Component) {
    super(component);
  }

  public operation(): void {
    super.operation();
    console.log('Decorator-2');
  }
}
