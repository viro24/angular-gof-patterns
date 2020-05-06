import { Subject } from './subject';

export class RealSubject2 implements Subject {
  public request(): void {
    console.log('Real Subject Request Method Has Been Called - Subject 2');
  }
}
