import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-interpreter',
  template: ''
})
export class InterpreterComponent implements OnInit {
  constructor() {
    console.log(
      '%cInterpreter: Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language',
      'color: SpringGreen;'
    );
    let client = new Client();
  }

  ngOnInit(): void {}
}
