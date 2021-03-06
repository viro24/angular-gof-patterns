import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/app.component';
import { ConcreteStrategy1 } from './concrete-strategy-1';
import { ConcreteStrategy2 } from './concrete-strategy-2';
import { ConcreteStrategy3 } from './concrete-strategy-3';
import { Context } from './context';
import { Element } from './element';

@Component({
  selector: 'gof-strategy',
  template: '',
})
export class StrategyComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cStrategy: Define a family of algorithms, encapsulate each one, and make them interchangeable. Lets the algorithm vary independently from clients that use it',
      'color: SpringGreen;'
    );
    let element1 = new Element('Element-1');
    let element2 = new Element('Element-2');

    let concreteStrategy1 = new ConcreteStrategy1();
    let concreteStrategy2 = new ConcreteStrategy2();
    let concreteStrategy3 = new ConcreteStrategy3();

    let context_1 = new Context(concreteStrategy1);
    let context_2 = new Context(concreteStrategy2);
    let context_3 = new Context(concreteStrategy3);

    Logger.debug(context_1.executeStrategy(element1));
    Logger.debug(context_2.executeStrategy(element1));
    Logger.debug(context_3.executeStrategy(element1));

    Logger.debug(context_2.executeStrategy(element2));
  }

  ngOnInit(): void {}
}
