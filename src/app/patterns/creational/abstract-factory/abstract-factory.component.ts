import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-abstract-factory-class',
  template: ''
})
export class AbstractFactoryComponent implements OnInit {
  constructor() {
    console.log(
      '%cAbstract Factory: Provides an interface for creating families of related or dependent objects without specifying their concrete class',
      'color: SpringGreen;'
    );
    let client = new Client();
  }

  ngOnInit(): void {}
}
