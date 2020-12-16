import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { Logger } from 'src/app/app.component';
@Component({
  selector: 'gof-proxy',
  template: '',
})
export class ProxyComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cReverse Proxy: Provide a surrogate or placeholder for another object to control access to it, knowing where it is going',
      'color: SpringGreen;',
    );
    const client = new Client('Subject-2');
  }

  ngOnInit(): void { }
}
