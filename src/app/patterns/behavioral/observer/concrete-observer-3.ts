import { Observer } from './observer';

export class ConcreteObserver3 implements Observer {
  public update(observes: string): void {
    console.log('From Observer-3 the observes ' + observes);
  }
}
