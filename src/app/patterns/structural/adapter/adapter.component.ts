import { Component, OnInit } from '@angular/core';
import { ConcreteAdapter } from './concrete-adapter';

@Component({
  selector: 'gof-adapter',
  template: ''
})
export class AdapterComponent implements OnInit {
  constructor() {
    let adapter = new ConcreteAdapter();

    adapter.save('Good Morning!');
    adapter.save('Good Afternoon!');
    adapter.save('Good Night!');

    adapter.print();
  }

  ngOnInit(): void {}
}
