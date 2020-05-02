import { Implementor } from './implementor';

export class ConcreteImplementor implements Implementor {
  public printMessageWelcome(): void {
    console.log('Welcome! from ConcreteImplemetor-1');
  }
  public printMessageEnd(): void {
    console.log('Bye! from ConcreteImplemetor-1');
  }
}
