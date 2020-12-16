import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { Logger } from 'src/app/app.component';
@Component({
  selector: 'gof-command',
  template: '',
})
export class CommandComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cCommand: Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations',
      'color: SpringGreen;',
    );
    const client = new Client();
  }

  ngOnInit(): void { }
}
