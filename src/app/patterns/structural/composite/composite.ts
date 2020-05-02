import { Component } from './component';

export class Composite extends Component {
  private savedNodes: Array<Component> = [];

  constructor(name: string) {
    super();
    this.setTypeNode('Folder');
    this.setName(name);
  }

  public addNode(node: Component): void {
    this.savedNodes.push(node);
  }

  public removeNode(node: Component): void {
    this.savedNodes = this.savedNodes.filter(item => item !== node);
  }

  public show(): void {
    console.log('Folder ' + this.getName());
    this.savedNodes.map(nodes => nodes.show());
  }
}
