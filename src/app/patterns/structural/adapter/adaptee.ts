export class Adaptee {
  private message: string;

  public addMessage(message: string): void {
    this.message = this.message !== undefined ? this.message + ' ' + message : message;
  }

  public printMessage(): void {
    console.log('%c' + this.message, 'color: yellow;');
  }
}
