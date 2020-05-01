import { Component, OnInit } from '@angular/core';
import { Context } from './context';
import { State1 } from './state-1';
import { State2 } from './state-2';

@Component({
  selector: 'gof-state',
  template: ''
})
export class StateComponent implements OnInit {
  constructor() {
    let state1: State1 = new State1();
    let state2: State2 = new State2();

    let context: Context = new Context();

    context.setState(state1);
    context.request();

    context.setState(state2);
    context.request();

    console.log('Get state...');
    console.log(context.getState());
  }

  ngOnInit(): void {}
}
