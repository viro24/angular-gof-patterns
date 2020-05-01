import { State } from './state';

export class ConcreteState1 implements State {
  public handle(): void {
    console.log('Execute the State-1');
  }
}
