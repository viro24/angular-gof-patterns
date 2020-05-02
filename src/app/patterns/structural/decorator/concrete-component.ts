import { Component } from './component';

export class ConcreteComponent implements Component {
  public operation(): void {
    console.log('Concrete Component');
  }
}
