import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-iterator',
  template: ''
})
export class IteratorComponent implements OnInit {
  constructor() {
    console.log('%cIterator: Providing Sequential Access To A Collection', 'color: SpringGreen;');
    let client = new Client();
  }

  ngOnInit(): void {}
}
