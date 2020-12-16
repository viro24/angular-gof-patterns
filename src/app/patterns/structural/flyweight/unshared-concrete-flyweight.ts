import { Flyweight } from './flyweight';
import { Logger } from 'src/app/app.component';
export class UnsharedConcreteFlyweight implements Flyweight {
  public operation(extrinsicState: string): void {
    Logger.debug(`Drawing line and text ${extrinsicState}`);
  }
}
