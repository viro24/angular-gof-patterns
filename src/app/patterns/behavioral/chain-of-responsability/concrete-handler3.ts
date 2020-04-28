import { Handler } from './handler';

export class ConcreteHandler3 extends Handler {
  public handleRequest(process: string): void {
    if (process === 'run') {
      console.log('Process "run" resolve to Handler-3');
    } else {
      this.successor.handleRequest(process);
    }
  }
}
