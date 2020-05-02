import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-command',
  template: ''
})
export class CommandComponent implements OnInit {
  constructor() {
    console.log(
      '%cCommand: Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations',
      'color: SpringGreen;'
    );
    let client = new Client();
  }

  ngOnInit(): void {}
}
