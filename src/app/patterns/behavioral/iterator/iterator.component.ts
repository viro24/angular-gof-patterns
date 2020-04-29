import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-iterator',
  template: ''
})
export class IteratorComponent implements OnInit {
  constructor() {
    let client = new Client();
  }

  ngOnInit(): void {}
}
