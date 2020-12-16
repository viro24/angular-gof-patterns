import { Logger } from 'src/app/app.component';
import { Subject } from './subject';

export class RealSubject1 implements Subject {
  public request(): void {
    Logger.debug('Real Subject Request Method Has Been Called - Subject-1');
  }
}
