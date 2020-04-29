import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-command',
  template: ''
})
export class CommandComponent implements OnInit {
  constructor() {
    let client = new Client();
  }

  ngOnInit(): void {}
}
