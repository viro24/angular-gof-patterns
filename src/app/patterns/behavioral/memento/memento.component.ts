import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/app.component';
import { Caretaker } from './caretaker';
import { Originator } from './originator';

@Component({
  selector: 'gof-memento',
  template: '',
})
export class MementoComponent implements OnInit {
  constructor() {
    Logger.debug(
      "%cMemento: Without violating encapsulation, capture and externalize an object's internal state so that the object can be restored to this state later",
      'color: SpringGreen;'
    );
    let caretaker: Caretaker = new Caretaker();

    let originator: Originator = new Originator();
    originator.setName('State-1');
    originator.setName('State-2');

    caretaker.addMemento(originator.saveToMemento());
    originator.setName('State-3');

    caretaker.addMemento(originator.saveToMemento());
    originator.setName('State-4');

    let memento_0 = caretaker.getMemento(0);
    let memento_1 = caretaker.getMemento(1);

    Logger.debug(originator);
    Logger.debug(memento_0.getSavedState());
    Logger.debug(memento_1.getSavedState());

    originator.restoreFromMemento(memento_0);
    Logger.debug(originator);
  }

  ngOnInit(): void {}
}
