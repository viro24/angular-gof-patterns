import { Handler } from './handler';

export class ConcreteHandler1 extends Handler {
  public handleRequest(action: string): void {
    if (action === 'save') {
      console.log('Action Save Resolve To Handler-1');
    } else {
      this.successor.handleRequest(action);
    }
  }
}
