import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-prototype',
  template: ''
})
export class PrototypeComponent implements OnInit {
  constructor() {
    console.log(
      '%cPrototype: Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype',
      'color: SpringGreen;'
    );

    let client = new Client();
  }

  ngOnInit(): void {}
}
