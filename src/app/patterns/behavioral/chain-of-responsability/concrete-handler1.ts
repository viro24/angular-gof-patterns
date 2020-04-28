import { Handler } from './handler';

export class ConcreteHandler1 extends Handler {
  public handleRequest(process: string): void {
    if (process === 'save') {
      console.log('Process "save" resolve to Handler-1');
    } else {
      this.successor.handleRequest(process);
    }
  }
}
