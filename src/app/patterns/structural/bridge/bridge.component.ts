import { Component, OnInit } from '@angular/core';
import { ConcreteAbstraction1 } from './concrete-abstraction-1';
import { ConcreteAbstraction2 } from './concrete-abstraction-2';
import { ConcreteImplementor } from './concrete-implementor';
import { Logger } from 'src/app/app.component';
@Component({
  selector: 'gof-bridge',
  template: '',
})
export class BridgeComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cBridge: Decouple an abstraction from its implementation so that the two can vary independently',
      'color: SpringGreen;',
    );
    const concreteImplementor = new ConcreteImplementor();

    const concreteAbstract1 = new ConcreteAbstraction1(concreteImplementor);
    const concreteAbstract2 = new ConcreteAbstraction2(concreteImplementor);

    Logger.debug('ConcreteAbstract1...');
    concreteAbstract1.print();

    Logger.debug('ConcreteAbstract2...');
    concreteAbstract2.print();
  }

  ngOnInit(): void { }
}
