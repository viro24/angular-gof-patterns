import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/app.component';
import { ConcreteCreator } from './concrete-creator';

@Component({
  selector: 'gof-factory-method',
  template: '',
})
export class FactoryMethodComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cFactory Method: Define an interface for creating an object, but let subclasses decide which class to instantiate. Lets a class defer instantiation to subclasses',
      'color: SpringGreen;'
    );

    let creator = new ConcreteCreator();
    let productValue: number = creator.genProductValue();
    Logger.debug(productValue);
  }

  ngOnInit(): void {}
}
