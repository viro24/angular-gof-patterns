import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/app.component';
import { Client } from './client';

@Component({
  selector: 'gof-chain-of-responsability',
  template: '',
})
export class ChainOfResponsabilityComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cChain of Responsability: Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it',
      'color: SpringGreen;'
    );
    Logger.debug('Send 1 Action');
    let client1 = new Client();
    client1.handleRequest('save');

    Logger.debug('Send 2 Action');
    let client2 = new Client();
    client2.handleRequest('load');

    Logger.debug('Send 3 Action');
    let client3 = new Client();
    client3.handleRequest('run');

    Logger.debug('Send Error Action');
    let client4 = new Client();
    client4.handleRequest('XXX-XXX-XXX');
  }

  ngOnInit(): void {}
}
