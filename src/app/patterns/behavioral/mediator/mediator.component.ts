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
    user1.setName('First');
    mediator.addColleague(user1);

    let user2 = new ConcreteColleague(mediator);
    user2.setName('Second');
    mediator.addColleague(user2);

    let user3 = new ConcreteColleague(mediator);
    user3.setName('Third');
    mediator.addColleague(user3);

    user1.sendMessage('Third', 'Good Morning!');
    user2.sendMessage('First', 'Good Afternoon!');
    user3.sendMessage('Second', 'Good Morning!');

    user3.sendMessage('xxx-xxx-xxx', 'Good Morning!');
  }

  ngOnInit(): void {}
}
