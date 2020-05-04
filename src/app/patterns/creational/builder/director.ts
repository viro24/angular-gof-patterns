import { Builder } from './builder';

export class Director {
  private builder: Builder;

  public constructor(builder: Builder) {
    this.builder = builder;
  }

  public construct(): void {
    this.builder.buildPartA();
    this.builder.buildPartB();
  }
}
