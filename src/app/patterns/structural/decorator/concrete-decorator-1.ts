import { Logger } from 'src/app/app.component';
import { Component } from './component';
import { Decorator } from './decorator';

export class ConcreteDecorator1 extends Decorator {
  constructor(component: Component) {
    super(component);
  }

  public operation(): void {
    super.operation();
    Logger.debug('Decorator-1');
  }
}
