import { Observer } from './observer';

export interface Subject {
  attach(observerState: Observer): void;
  detach(observerState: Observer): void;
  notify(notifies: string): void;
}
