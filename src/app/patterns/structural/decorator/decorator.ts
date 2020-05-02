import { Component } from './component';

export class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public operation(): void {
    this.component.operation();
  }
}
