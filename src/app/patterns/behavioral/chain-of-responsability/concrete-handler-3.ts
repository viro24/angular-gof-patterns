import { Logger } from 'src/app/app.component';
import { Handler } from './handler';

export class ConcreteHandler3 extends Handler {
  public handleRequest(action: string): void {
    if (action === 'run') {
      Logger.debug('Action Run Resolve To Handler-3');
    } else {
      this.successor.handleRequest(action);
    }
  }
}
