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
    console.log(
      '%cDecorator: Attach additional responsibilities to an object dynamically. Provide a flexible alternative to sub-classing for extending functionality',
      'color: SpringGreen;'
    );

    console.log('Dynamically Adding Responsibilities');
    let concreteDecorator = new ConcreteDecorator1(new ConcreteDecorator2(new ConcreteComponent()));
    concreteDecorator.operation();

    console.log('Dynamically Adding Responsibility');
    concreteDecorator = new ConcreteDecorator1(new ConcreteComponent());
    concreteDecorator.operation();

    console.log('Again Dynamically Adding Responsibility');
    concreteDecorator = new ConcreteDecorator2(new ConcreteComponent());
    concreteDecorator.operation();
  }

  ngOnInit(): void {}
}
