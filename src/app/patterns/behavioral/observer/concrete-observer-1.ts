import { Observer } from './observer';

export class ConcreteObserver1 implements Observer {
  public update(observes: string): void {
    console.log('From Observer-1 Observes ' + observes);
  }
}
