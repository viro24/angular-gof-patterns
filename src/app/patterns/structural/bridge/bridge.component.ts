import { Component, OnInit } from '@angular/core';
import { ConcreteAbstraction1 } from './concrete-abstraction-1';
import { ConcreteAbstraction2 } from './concrete-abstraction-2';
import { ConcreteImplementor } from './concrete-implementor';

@Component({
  selector: 'gof-bridge',
  template: ''
})
export class BridgeComponent implements OnInit {
  constructor() {
    console.log('%cBridge: Separating The Conceptual Aspects Of A Hierarchy', 'color: SpringGreen;');
    let concreteImplementor = new ConcreteImplementor();

    let concreteAbstract1 = new ConcreteAbstraction1(concreteImplementor);
    let concreteAbstract2 = new ConcreteAbstraction2(concreteImplementor);

    console.log('ConcreteAbstract1...');
    concreteAbstract1.print();

    console.log('ConcreteAbstract2...');
    concreteAbstract2.print();
  }

  ngOnInit(): void {}
}
