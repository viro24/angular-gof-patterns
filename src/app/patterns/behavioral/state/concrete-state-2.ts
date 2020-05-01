import { State } from './state';

export class ConcreteState2 implements State {
  public handle(): void {
    console.log('Execute State-2');
  }
}
