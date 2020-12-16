import { Component } from './component';
import { Logger } from 'src/app/app.component';
export class ConcreteComponent implements Component {
  public operation(): void {
    Logger.debug('Concrete Component');
  }
}
