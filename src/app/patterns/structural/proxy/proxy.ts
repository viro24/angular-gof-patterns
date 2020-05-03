import { RealSubject } from './real-subject';
import { Subject } from './subject';

export class Proxy implements Subject {
  private subject: Subject;

  public async request(): Promise<void> {
    if (this.subject === undefined) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.subject = new RealSubject();
    }
    this.subject.request();
  }
}
