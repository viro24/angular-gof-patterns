export interface Adapter {
  save(message: string): void;
  print(): void;
}
