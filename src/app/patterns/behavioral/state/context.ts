import { State } from './state';

export class Context {
  private state: State;

  public setState(state: State): void {
    this.state = state;
  }

  public getState(): State {
    return this.state;
  }

  public request(): void {
    this.state.handle();
  }
}
