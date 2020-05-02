import { Component, OnInit } from '@angular/core';
import { Class1 } from './class-1';
import { Class2 } from './class-2';
import { Facade } from './facade';

@Component({
  selector: 'gof-facade',
  template: ''
})
export class FacadeComponent implements OnInit {
  constructor() {
    console.log('Start Facade... Construct Object Complex');
    let facade = new Facade();

    facade.attach(new Class1());
    facade.attach(new Class2());

    facade.constructed();
  }

  ngOnInit(): void {}
}
