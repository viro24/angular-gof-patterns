import { timer } from 'rxjs';
import { RealSubject } from './real-subject';
import { Subject } from './subject';

export class Proxy implements Subject {
  private subject: Subject;

  public async request(): Promise<void> {
    if (this.subject === undefined) {
      this.timer().subscribe(data => {
        this.subject = new RealSubject();
        this.subject.request();
      });
    } else {
      this.subject.request();
    }
  }

  private timer() {
    return timer(1000);
  }
}
