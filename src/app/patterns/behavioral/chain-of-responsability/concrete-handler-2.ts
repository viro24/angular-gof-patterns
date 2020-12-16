import { Logger } from 'src/app/app.component';
import { Handler } from './handler';

export class ConcreteHandler2 extends Handler {
  public handleRequest(action: string): void {
    if (action === 'load') {
      Logger.debug('Action Load Resolve To Handler-2');
    } else {
      this.successor.handleRequest(action);
    }
  }
}
