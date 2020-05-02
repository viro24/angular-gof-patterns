import { Adaptee } from './adaptee';
import { Adapter } from './adapter';

export class ConcreteAdapter implements Adapter {
  private adaptee: Adaptee;

  constructor() {
    this.adapteeMethod();
  }

  private adapteeMethod() {
    this.adaptee = new Adaptee();
  }
  public save(message: string): void {
    this.adaptee.addMessage(message);
  }

  public print(): void {
    this.adaptee.printMessage();
  }
}
