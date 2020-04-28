import { Handler } from './handler';

export class ConcreteHandler2 extends Handler {
  public handleRequest(process: string): void {
    if (process === 'load') {
      console.log('Process "load" resolve to Handler-2');
    } else {
      this.successor.handleRequest(process);
    }
  }
}
