import { Logger } from 'src/app/app.component';
import { State } from './state';

export class ConcreteState2 implements State {
  public handle(): void {
    Logger.debug('Execute State-2');
  }
}
