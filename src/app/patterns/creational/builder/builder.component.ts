import { Component, OnInit } from '@angular/core';
import { ConcreteBuilder } from './concrete-builder';
import { Director } from './director';
import { Logger } from 'src/app/app.component';
@Component({
  selector: 'gof-builder',
  template: '',
})
export class BuilderComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cBuilder: Separate the construction of a complex object from its representing so that the same construction process can create different representations',
      'color: SpringGreen;',
    );

    const builder = new ConcreteBuilder();
    const director = new Director(builder);

    director.construct();
    const product = builder.getResult();

    Logger.debug('Created Complex Object');
    Logger.debug(product);
  }

  ngOnInit(): void { }
}
