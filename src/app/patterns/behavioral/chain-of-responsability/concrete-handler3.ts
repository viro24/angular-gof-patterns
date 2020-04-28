import { Handler } from './handler';

export class ConcreteHandler3 extends Handler {
  public handleRequest(action: string): void {
    if (action === 'run') {
      console.log('action "run" resolve to Handler-3');
    } else {
      this.successor.handleRequest(action);
    }
  }
}
