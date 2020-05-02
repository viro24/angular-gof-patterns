import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-visitor',
  template: ''
})
export class VisitorComponent implements OnInit {
  constructor() {
    console.log(
      '%cVisitor: Represent an operation to be performed on the elements of an object structure. Lets you define a new operation without changing the classes of the elements on which it operates',
      'color: SpringGreen;'
    );
    let client = new Client();
  }

  ngOnInit(): void {}
}
