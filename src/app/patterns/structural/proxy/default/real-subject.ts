import { Subject } from './subject';

export class RealSubject implements Subject {
  public request(): void {
    console.log('Real Subject Request Method Has Been Called');
  }
}
