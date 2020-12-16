import { Logger } from 'src/app/app.component';

export class Receiver {
  public action(operation: string): void {
    switch (operation) {
      case 'save':
        Logger.debug('Execute Option Save');
        break;
      case 'load':
        Logger.debug('Execute Option Load');
        break;
      case 'run':
        Logger.debug('Execute Option Run');
        break;
      default:
        Logger.debug('Option invalid');
        break;
    }
  }
}
