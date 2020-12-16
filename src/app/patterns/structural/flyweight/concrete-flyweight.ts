import { Color } from './color';
import { Flyweight } from './flyweight';
import { Logger } from 'src/app/app.component';
export class ConcreteFlyweight implements Flyweight {
  private intrinsicState: Color;

  constructor(intrinsicState: Color) {
    this.intrinsicState = intrinsicState;
  }

  public getIntrinsicState(): string {
    return Color[this.intrinsicState];
  }

  public operation(extrinsicState: string) {
    Logger.debug(
      `Drawing circle with border color ${this.getIntrinsicState()} and text ${extrinsicState}`,
    );
  }
}
