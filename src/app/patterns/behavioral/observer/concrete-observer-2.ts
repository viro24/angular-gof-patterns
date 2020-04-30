import { Observer } from './observer';

export class ConcreteObserver2 implements Observer {
  public update(observes: string): void {
    console.log('From Observer-2 the observes ' + observes);
  }
}
