import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-visitor',
  template: ''
})
export class VisitorComponent implements OnInit {
  constructor() {
    let client = new Client();
  }

  ngOnInit(): void {}
}
