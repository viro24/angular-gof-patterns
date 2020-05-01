export abstract class Element {
  private name: string;
  private phone: string;

  protected abstract setName(): string;
  protected abstract setPhone(): string;

  public start(): void {
    this.name = this.setName();
    this.phone = this.setPhone();
  }

  public showMessage(): string {
    return 'My Name ' + this.name + ' And Phone ' + this.phone;
  }
}
