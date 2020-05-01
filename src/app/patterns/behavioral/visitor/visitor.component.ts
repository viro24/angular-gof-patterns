import { Component, OnInit } from '@angular/core';
import { ConcreteElement1 } from './concrete-element-1';
import { ConcreteElement2 } from './concrete-element-2';
import { ConcreteElement3 } from './concrete-element-3';
import { ConcreteVisitor1 } from './concrete-visitor-1';
import { ConcreteVisitor2 } from './concrete-visitor-2';

@Component({
  selector: 'gof-visitor',
  template: ''
})
export class VisitorComponent implements OnInit {
  constructor() {
    let element1 = new ConcreteElement1();
    let element2 = new ConcreteElement2();
    let element3 = new ConcreteElement3();

    let visit1 = new ConcreteVisitor1();
    let visit2 = new ConcreteVisitor2();

    console.log(element1.accept(visit1) + element2.accept(visit1) + element3.accept(visit1));
    console.log(element1.accept(visit2) + element2.accept(visit2) + element3.accept(visit2));
  }

  ngOnInit(): void {}
}
