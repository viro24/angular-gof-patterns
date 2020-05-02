import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-adapter-class',
  template: ''
})
export class AdapterComponent implements OnInit {
  constructor() {
    let client = new Client();
  }

  ngOnInit(): void {}
}
