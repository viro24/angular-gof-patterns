export interface Colleague {
  sendMessage(from: string, message: string): void;
  receiverMessage(to: string, message: string): void;
}
