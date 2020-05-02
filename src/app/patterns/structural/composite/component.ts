export abstract class Component {
  private name;
  private typeNode;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setTypeNode(typeNode: string): void {
    this.typeNode = typeNode;
  }

  public abstract show(): void;
}
