import { Component, OnInit } from '@angular/core';
import { ConcreteBuilder } from './concrete-builder';
import { Director } from './director';

@Component({
  selector: 'gof-builder',
  template: ''
})
export class BuilderComponent implements OnInit {
  constructor() {
    console.log(
      '%cBuilder: Separate the construction of a complex object from its representing so that the same construction process can create different representations',
      'color: SpringGreen;'
    );

    let builder = new ConcreteBuilder();
    let director = new Director(builder);

    director.construct();
    let product = builder.getResult();

    console.log('Created Complex Object');
    console.log(product);
  }

  ngOnInit(): void {}
}
