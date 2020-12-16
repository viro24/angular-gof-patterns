import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/app.component';
import { Client } from './client';

@Component({
  selector: 'gof-adapter-class',
  template: '',
})
export class AdapterComponent implements OnInit {
  constructor() {
    Logger.debug(
      "%cAdapter Class: Convert the interface of a class into another interface clients expect. Lets classes work together that couldn't otherwise because of incompatible interfaces",
      'color: SpringGreen;'
    );
    let client = new Client();
  }

  ngOnInit(): void {}
}
