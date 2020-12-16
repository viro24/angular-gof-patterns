import { Component, OnInit } from '@angular/core';
import { ConcreteComponent } from './concrete-component';
import { ConcreteDecorator1 } from './concrete-decorator-1';
import { ConcreteDecorator2 } from './concrete-decorator-2';
import { Logger } from 'src/app/app.component';
@Component({
  selector: 'gof-decorator',
  template: '',
})
export class DecoratorComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cDecorator: Attach additional responsibilities to an object dynamically. Provide a flexible alternative to sub-classing for extending functionality',
      'color: SpringGreen;',
    );

    Logger.debug('Dynamically Adding Responsibilities');
    let concreteDecorator = new ConcreteDecorator1(
      new ConcreteDecorator2(new ConcreteComponent()),
    );
    concreteDecorator.operation();

    Logger.debug('Dynamically Adding Responsibility');
    concreteDecorator = new ConcreteDecorator1(new ConcreteComponent());
    concreteDecorator.operation();

    Logger.debug('Again Dynamically Adding Responsibility');
    concreteDecorator = new ConcreteDecorator2(new ConcreteComponent());
    concreteDecorator.operation();
  }

  ngOnInit(): void { }
}
