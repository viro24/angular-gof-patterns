import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-adapter-object',
  template: ''
})
export class AdapterComponent implements OnInit {
  constructor() {
    console.log(
      '%cAdapter Object: Converting The Interface Of An Existing Class To The Expected Interface',
      'color: SpringGreen;'
    );
    let client = new Client();
  }

  ngOnInit(): void {}
}
