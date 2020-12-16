import { Component } from './component';
import { Decorator } from './decorator';
import { Logger } from 'src/app/app.component';
export class ConcreteDecorator2 extends Decorator {
  constructor(component: Component) {
    super(component);
  }

  public operation(): void {
    super.operation();
    Logger.debug('Decorator-2');
  }
}
