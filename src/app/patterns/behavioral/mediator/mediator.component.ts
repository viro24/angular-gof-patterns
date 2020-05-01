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

    let user1 = new ConcreteColleague(mediator);
    user1.setName('Element-1');
    mediator.addColleague(user1);

    let user2 = new ConcreteColleague(mediator);
    user2.setName('Element-2');
    mediator.addColleague(user2);

    let user3 = new ConcreteColleague(mediator);
    user3.setName('Element-3');
    mediator.addColleague(user3);

    user1.sendMessage('Element-3', 'Good Morning!');
    user2.sendMessage('Element-1', 'Good Afternoon!');
    user3.sendMessage('Element-2', 'Good Morning!');

    user3.sendMessage('XXX-XXX-XXX', 'Good Morning!');
  }

  ngOnInit(): void {}
}
