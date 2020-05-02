import { Component, OnInit } from '@angular/core';
import { Caretaker } from './caretaker';
import { Originator } from './originator';

@Component({
  selector: 'gof-memento',
  template: ''
})
export class MementoComponent implements OnInit {
  constructor() {
    console.log('%cMemento: Safeguarding And Restoring The State Of An Object', 'color: SpringGreen;');
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

    console.log(originator);
    console.log(memento_0.getSavedState());
    console.log(memento_1.getSavedState());

    originator.restoreFromMemento(memento_0);
    console.log(originator);
  }

  ngOnInit(): void {}
}
