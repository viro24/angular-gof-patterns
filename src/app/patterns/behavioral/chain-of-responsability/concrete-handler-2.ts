import { Handler } from './handler';

export class ConcreteHandler2 extends Handler {
  public handleRequest(action: string): void {
    if (action === 'load') {
      console.log('Action Load Resolve To Handler-2');
    } else {
      this.successor.handleRequest(action);
    }
  }
}
