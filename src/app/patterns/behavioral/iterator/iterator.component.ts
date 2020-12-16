import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { Logger } from 'src/app/app.component';
@Component({
  selector: 'gof-iterator',
  template: '',
})
export class IteratorComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cIterator: Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation',
      'color: SpringGreen;',
    );
    const client = new Client();
  }

  ngOnInit(): void { }
}
