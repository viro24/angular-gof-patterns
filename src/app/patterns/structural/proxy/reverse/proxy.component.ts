import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-proxy',
  template: ''
})
export class ProxyComponent implements OnInit {
  constructor() {
    console.log(
      '%cProxy: Provide a surrogate or placeholder for another object to control access to it',
      'color: SpringGreen;'
    );
    let client = new Client('Subject-2');
  }

  ngOnInit(): void {}
}
