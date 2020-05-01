import { State } from './state';

export class State2 implements State {
  public handle(): void {
    console.log('Execute the State-2');
  }
}
