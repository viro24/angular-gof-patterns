import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/app.component';
import { ConcreteState1 } from './concrete-state-1';
import { ConcreteState2 } from './concrete-state-2';
import { Context } from './context';

@Component({
  selector: 'gof-state',
  template: '',
})
export class StateComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cState: Allow an object to alter its behavior when its internal state changes. The object will appear to change its class',
      'color: SpringGreen;'
    );
    let state1 = new ConcreteState1();
    let state2 = new ConcreteState2();

    let context = new Context();

    context.setState(state1);
    context.request();

    context.setState(state2);
    context.request();

    Logger.debug('Get state...');
    Logger.debug(context.getState());
  }

  ngOnInit(): void {}
}
