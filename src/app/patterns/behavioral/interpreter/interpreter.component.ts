import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-interpreter',
  template: ''
})
export class InterpreterComponent implements OnInit {
  constructor() {
    let client = new Client();
  }

  ngOnInit(): void {}
}
