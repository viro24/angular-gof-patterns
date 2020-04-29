import { ConcreteIterator } from './concrete-iterator';

export interface Aggregate {
  createIterator(): ConcreteIterator;
}
