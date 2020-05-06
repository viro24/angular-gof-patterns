import { Proxy } from './proxy';

export class Client {
  constructor(chosenSubject: string) {
    let subject = new Proxy();
    subject.setSubject(chosenSubject);
    subject.request();
  }
}
