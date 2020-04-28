import { Handler } from './handler';

export class ConcreteHandler1 extends Handler {
  public handleRequest(action: string): void {
    if (action === 'save') {
      console.log('action "save" resolve to Handler-1');
    } else {
      this.successor.handleRequest(action);
    }
  }
}
