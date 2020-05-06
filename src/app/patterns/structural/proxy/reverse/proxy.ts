import { RealSubject1 } from './real-subject-1';
import { RealSubject2 } from './real-subject-2';
import { Subject } from './subject';

export class Proxy implements Subject {
  private subject: Subject;
  private chosenSubject: string;

  public async request(): Promise<void> {
    if (this.subject === undefined) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (this.chosenSubject === 'Subject-1') {
        this.subject = new RealSubject1();
      }
      if (this.chosenSubject === 'Subject-2') {
        this.subject = new RealSubject2();
      }
    }
    this.subject.request();
  }

  setSubject(chosenSubject: string) {
    this.chosenSubject = chosenSubject;
  }
}
