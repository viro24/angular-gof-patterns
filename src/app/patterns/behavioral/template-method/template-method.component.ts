import { Component, OnInit } from '@angular/core';
import { ConcreteElement1 } from './concrete-element-1';
import { ConcreteElement2 } from './concrete-element-2';
import { ConcreteElement3 } from './concrete-element-3';

@Component({
  selector: 'gof-template-method',
  template: ''
})
export class TemplateMethodComponent implements OnInit {
  constructor() {
    let concreteElement1 = new ConcreteElement1();
    let concreteElement2 = new ConcreteElement2();
    let concreteElement3 = new ConcreteElement3();

    concreteElement1.start();
    concreteElement2.start();
    concreteElement3.start();

    console.log(concreteElement1.showMessage());
    console.log(concreteElement2.showMessage());
    console.log(concreteElement3.showMessage());
  }

  ngOnInit(): void {}
}
