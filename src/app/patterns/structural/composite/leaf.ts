import { Component } from './component';

export class Leaf extends Component {
  constructor(name: string) {
    super();
    this.setName(name);
    this.setTypeNode('FILE');
  }
  public show(): void {
    console.log('File ' + this.getName());
  }
}
