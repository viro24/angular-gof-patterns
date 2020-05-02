import { Component, OnInit } from '@angular/core';
import { ConcreteObserver1 } from './concrete-observer-1';
import { ConcreteObserver2 } from './concrete-observer-2';
import { ConcreteObserver3 } from './concrete-observer-3';
import { ConcreteSubject } from './concrete-subject';

@Component({
  selector: 'gof-concreteObserver',
  template: ''
})
export class ObserverComponent implements OnInit {
  constructor() {
    console.log('%cObserver: Notifying Observers Of Changes', 'color: SpringGreen;');
    let concreteSubject = new ConcreteSubject();

    let concreteObserver1: ConcreteObserver1 = new ConcreteObserver1();
    let concreteObserver2: ConcreteObserver2 = new ConcreteObserver2();
    let concreteObserver3: ConcreteObserver3 = new ConcreteObserver3();

    concreteSubject.attach(concreteObserver1);
    concreteSubject.attach(concreteObserver2);
    concreteSubject.attach(concreteObserver3);

    console.log('Notify Reset System');
    concreteSubject.notify('Reset System');

    console.log('End... Now Detachs... Only 1 Observable');

    concreteSubject.detach(concreteObserver1);
    concreteSubject.detach(concreteObserver2);

    console.log('Notify End Program');
    concreteSubject.notify('End Program');
  }

  ngOnInit(): void {}
}
