import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-chain-of-responsability',
  template: ''
})
export class ChainOfResponsabilityComponent implements OnInit {
  constructor() {
    console.log('Send 1 Action');
    let client1 = new Client();
    client1.handleRequest('save');

    console.log('Send 2 Action');
    let client2 = new Client();
    client2.handleRequest('load');

    console.log('Send 3 Action');
    let client3 = new Client();
    client3.handleRequest('run');

    console.log('Send Error Action');
    let client4 = new Client();
    client4.handleRequest('XXX-XXX-XXX');
  }

  ngOnInit(): void {}
}
