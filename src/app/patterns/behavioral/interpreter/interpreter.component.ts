import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-interpreter',
  template: ''
})
export class InterpreterComponent implements OnInit {
  constructor() {
    console.log('%cInterpreter: Representing The Grammar Of A Language Using Objects', 'color: SpringGreen;');
    let client = new Client();
  }

  ngOnInit(): void {}
}
