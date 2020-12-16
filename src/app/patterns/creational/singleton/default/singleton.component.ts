import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/app.component';
import { Singleton } from './singleton';

@Component({
  selector: 'gof-singleton',
  template: '',
})
export class SingletonComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cSingleton: Ensure a class only has one instance and provide a global point of access to it',
      'color: SpringGreen;'
    );
    let singleton1 = new Singleton();
    let singleton2 = new Singleton();
    let singleton3 = new Singleton();
  }

  ngOnInit(): void {}
}
