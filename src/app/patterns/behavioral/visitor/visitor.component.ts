import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-visitor',
  template: ''
})
export class VisitorComponent implements OnInit {
  constructor() {
    console.log('%cVisitor: Adding New Operations Without Modifying The Classes Of These Objects', 'color: SpringGreen;');
    let client = new Client();
  }

  ngOnInit(): void {}
}
