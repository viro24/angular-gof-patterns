import { Subject } from './subject';

export class RealSubject1 implements Subject {
  public request(): void {
    console.log('Real Subject Request Method Has Been Called - Subject-1');
  }
}
