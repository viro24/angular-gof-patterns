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
    console.log('%cDecorator: Dynamically Adding Functionalities', 'color: SpringGreen;');
    let concreteDecorator = new ConcreteDecorator1(new ConcreteDecorator2(new ConcreteComponent()));
    concreteDecorator.operation();

    console.log('Dynamically Adding Functionality');
    concreteDecorator = new ConcreteDecorator1(new ConcreteComponent());
    concreteDecorator.operation();

    console.log('Again Dynamically Adding Functionality');
    concreteDecorator = new ConcreteDecorator2(new ConcreteComponent());
    concreteDecorator.operation();
  }

  ngOnInit(): void {}
}
