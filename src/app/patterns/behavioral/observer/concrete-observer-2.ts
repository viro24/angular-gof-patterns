import { Logger } from 'src/app/app.component';
import { Observer } from './observer';

export class ConcreteObserver2 implements Observer {
  public update(observes: string): void {
    Logger.debug('From Observer-2 Observes ' + observes);
  }
}
