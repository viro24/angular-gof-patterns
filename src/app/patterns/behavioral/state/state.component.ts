import { Component, OnInit } from '@angular/core';
import { ConcreteState1 } from './concrete-state-1';
import { ConcreteState2 } from './concrete-state-2';
import { Context } from './context';

@Component({
  selector: 'gof-state',
  template: ''
})
export class StateComponent implements OnInit {
  constructor() {
    let state1 = new ConcreteState1();
    let state2 = new ConcreteState2();

    let context = new Context();

    context.setState(state1);
    context.request();

    context.setState(state2);
    context.request();

    console.log('Get state...');
    console.log(context.getState());
  }

  ngOnInit(): void {}
}
