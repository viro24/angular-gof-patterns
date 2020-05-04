export abstract class Prototype {
  private prototypeName: string;

  public setPrototypeName(prototypeName: string) {
    this.prototypeName = prototypeName + '@' + Math.floor(Math.random() * 99);
  }

  public getPrototypeName(): string {
    return this.prototypeName;
  }

  public clone(): Prototype {
    let clone = Object.assign(Object.create(this), this);
    return clone;
  }
}
