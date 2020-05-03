import { Proxy } from './proxy';

export class Client {
  constructor() {
    let subject = new Proxy();
    subject.request();
  }
}
