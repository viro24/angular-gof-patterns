import { Subject } from './subject';
import { Logger } from 'src/app/app.component';
export class RealSubject2 implements Subject {
  public request(): void {
    Logger.debug('Real Subject Request Method Has Been Called - Subject 2');
  }
}
