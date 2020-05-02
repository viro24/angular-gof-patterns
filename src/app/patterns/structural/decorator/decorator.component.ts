import { Component, OnInit } from '@angular/core';
import { ConcreteComponent } from './concrete-component';
import { ConcreteDecorator1 } from './concrete-decorator-1';
import { ConcreteDecorator2 } from './concrete-decorator-2';

@Component({
  selector: 'gof-decorator',
  template: ''
})
export class DecoratorComponent implements OnInit {
  constructor() {
    let concreteDecorator = new ConcreteDecorator1(new ConcreteDecorator2(new ConcreteComponent()));
    concreteDecorator.operation();

    concreteDecorator = new ConcreteDecorator1(new ConcreteComponent());
    concreteDecorator.operation();

    concreteDecorator = new ConcreteDecorator2(new ConcreteComponent());
    concreteDecorator.operation();
  }

  ngOnInit(): void {}
}
