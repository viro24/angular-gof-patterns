import { Component, OnInit } from '@angular/core';
import { ConcreteObserver1 } from './concrete-observer-1';
import { ConcreteObserver2 } from './concrete-observer-2';
import { ConcreteObserver3 } from './concrete-observer-3';
import { ConcreteSubject } from './concrete-subject';

@Component({
  selector: 'gof-observer',
  template: ''
})
export class ObserverComponent implements OnInit {
  constructor() {
    let subject = new ConcreteSubject();

    let observer1: ConcreteObserver1 = new ConcreteObserver1();
    let observer2: ConcreteObserver2 = new ConcreteObserver2();
    let observer3: ConcreteObserver3 = new ConcreteObserver3();

    subject.attach(observer1);
    subject.attach(observer2);
    subject.attach(observer3);

    console.log('Notify Reset System');
    subject.notify('Reset System');

    console.log('End... Now Detachs... Only 1 Observable');

    subject.detach(observer1);
    subject.detach(observer2);

    console.log('Notify End Program');
    subject.notify('End Program');
  }

  ngOnInit(): void {}
}
