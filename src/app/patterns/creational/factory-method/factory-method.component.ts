import { Component, OnInit } from '@angular/core';
import { ConcreteCreator } from './concrete-creator';

@Component({
  selector: 'gof-factory-method',
  template: ''
})
export class FactoryMethodComponent implements OnInit {
  constructor() {
    console.log(
      '%cFactory Method: Define an interface for creating an object, but let subclasses decide which class to instantiate. Lets a class defer instantiation to subclasses',
      'color: SpringGreen;'
    );

    let creator = new ConcreteCreator();
    let productValue: number = creator.genProductValue();
    console.log(productValue);
  }

  ngOnInit(): void {}
}
