import { Component, OnInit } from '@angular/core';
import { ConcreteColleague } from './concrete-colleague';
import { ConcreteMediator } from './concrete-mediator';

@Component({
  selector: 'gof-mediator',
  template: ''
})
export class MediatorComponent implements OnInit {
  constructor() {
    let mediator = new ConcreteMediator();

    let concreteUser1 = new ConcreteColleague(mediator);
    concreteUser1.setName('Element-1');
    mediator.addColleague(concreteUser1);

    let concreteUser2 = new ConcreteColleague(mediator);
    concreteUser2.setName('Element-2');
    mediator.addColleague(concreteUser2);

    let concreteUser3 = new ConcreteColleague(mediator);
    concreteUser3.setName('Element-3');
    mediator.addColleague(concreteUser3);

    concreteUser1.sendMessage('Element-3', 'Good Morning!');
    concreteUser2.sendMessage('Element-1', 'Good Afternoon!');
    concreteUser3.sendMessage('Element-2', 'Good Morning!');

    concreteUser3.sendMessage('XXX-XXX-XXX', 'Good Morning!');
  }

  ngOnInit(): void {}
}
