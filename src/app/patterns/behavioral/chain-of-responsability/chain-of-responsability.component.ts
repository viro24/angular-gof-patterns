import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'gof-chain-of-responsability',
  template: ''
})
export class ChainOfResponsabilityComponent implements OnInit {
  constructor() {
    // console.log('Send 1 action');
    let client = new Client();
    client.handleRequest('save');

    // console.log('Send 2 action');
    // client = new Client();
    // client.handleRequest('load');

    // console.log('Send 3 action');
    // client = new Client();
    // client.handleRequest('run');

    // console.log('Send error action');
    // client = new Client();
    // client.handleRequest('xxx-xxx-xxx');
  }

  ngOnInit(): void {}
}
