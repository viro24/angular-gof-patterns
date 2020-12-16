import { Logger } from 'src/app/app.component';
export class Adaptee {
  private message: string;

  public addMessage(message: string): void {
    this.message =
      this.message !== undefined ? this.message + ' ' + message : message;
  }

  public printMessage(): void {
    Logger.debug(this.message);
  }
}
