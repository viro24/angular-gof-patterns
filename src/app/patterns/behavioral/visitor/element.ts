import { Visitor } from './visitor';

export abstract class Element {
  public abstract accept(visitor: Visitor): string;
}
