import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-iterator',
  template: ''
})
export class IteratorComponent implements OnInit {
  constructor() {
    console.log(
      '%cIterator: Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation',
      'color: SpringGreen;'
    );
    let client = new Client();
  }

  ngOnInit(): void {}
}
