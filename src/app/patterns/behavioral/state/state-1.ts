import { State } from './state';

export class State1 implements State {
  public handle(): void {
    console.log('Execute the State-1');
  }
}
