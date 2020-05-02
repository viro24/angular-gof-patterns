import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-flyweight',
  template: ''
})
export class FlyweightComponent implements OnInit {
  constructor() {
    console.log('%cFlyweight: Use sharing to support large numbers of fine grained objects efficiently', 'color: SpringGreen;');
    let client = new Client();
  }

  ngOnInit(): void {}
}
