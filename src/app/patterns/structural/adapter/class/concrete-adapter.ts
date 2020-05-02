import { Adaptee } from './adaptee';
import { Adapter } from './adapter';

export class ConcreteAdapter extends Adaptee implements Adapter {
  private adaptee: Adaptee;

  public save(message: string): void {
    super.addMessage(message);
  }

  public print(): void {
    super.printMessage();
  }
}
