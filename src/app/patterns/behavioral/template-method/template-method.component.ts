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
    let element_1 = new ConcreteElement1();
    let element_2 = new ConcreteElement2();
    let element_3 = new ConcreteElement3();

    element_1.start();
    element_2.start();
    element_3.start();

    console.log(element_1.showMessage());
    console.log(element_2.showMessage());
    console.log(element_3.showMessage());
  }

  ngOnInit(): void {}
}
