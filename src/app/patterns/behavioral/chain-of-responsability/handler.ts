export abstract class Handler {
  protected successor: Handler;

  public setSuccessor(handler: Handler): void {
    this.successor = handler;
  }

  public abstract handleRequest(action: string): void;
}
