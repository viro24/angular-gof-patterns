import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { Logger } from 'src/app/app.component';
@Component({
  selector: 'gof-flyweight',
  template: '',
})
export class FlyweightComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cFlyweight: Use sharing to support large numbers of fine grained objects efficiently',
      'color: SpringGreen;',
    );
    const client = new Client();
  }

  ngOnInit(): void { }
}
