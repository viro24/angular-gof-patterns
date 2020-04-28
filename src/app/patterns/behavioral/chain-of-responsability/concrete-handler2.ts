import { Handler } from './handler';

export class ConcreteHandler2 extends Handler {
  public handleRequest(action: string): void {
    if (action === 'load') {
      console.log('action "load" resolve to Handler-2');
    } else {
      this.successor.handleRequest(action);
    }
  }
}
