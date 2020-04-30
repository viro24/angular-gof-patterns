import { Observer } from './observer';
import { Subject } from './subject';

export class ConcreteSubject implements Subject {
  private subjectState: Array<Observer> = [];

  public attach(observerState: Observer): void {
    this.subjectState.push(observerState);
  }

  public detach(observerState: Observer): void {
    this.subjectState = this.subjectState.filter(objserver => objserver !== observerState);
  }

  public notify(notifies: string): void {
    this.subjectState.map(observerState => observerState.update(notifies));
  }
}
