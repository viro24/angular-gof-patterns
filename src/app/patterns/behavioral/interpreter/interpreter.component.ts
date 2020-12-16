import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { Logger } from 'src/app/app.component';
@Component({
  selector: 'gof-interpreter',
  template: '',
})
export class InterpreterComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cInterpreter: Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language',
      'color: SpringGreen;',
    );
    const client = new Client();
  }

  ngOnInit(): void { }
}
