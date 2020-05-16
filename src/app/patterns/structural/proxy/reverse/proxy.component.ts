import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-proxy',
  template: ''
})
export class ProxyComponent implements OnInit {
  constructor() {
    console.log(
      '%cReverse Proxy: Provide a surrogate or placeholder for another object to control access to it, knowing where it is going',
      'color: SpringGreen;'
    );
    let client = new Client('Subject-2');
  }

  ngOnInit(): void {}
}
