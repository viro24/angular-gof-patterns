import { Flyweight } from './flyweight';

export class UnsharedConcreteFlyweight implements Flyweight {
  public operation(extrinsicState: string): void {
    console.log(`Drawing line and text ${extrinsicState}`);
  }
}
