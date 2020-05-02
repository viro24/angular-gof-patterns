import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-command',
  template: ''
})
export class CommandComponent implements OnInit {
  constructor() {
    console.log('%cCommand: Transforming A Request Into An Object', 'color: SpringGreen;');
    let client = new Client();
  }

  ngOnInit(): void {}
}
