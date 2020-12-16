import { Implementor } from './implementor';
import { Logger } from 'src/app/app.component';
export class ConcreteImplementor implements Implementor {
  public printMessageWelcome(): void {
    Logger.debug('Welcome! from ConcreteImplemetor-1');
  }
  public printMessageEnd(): void {
    Logger.debug('Bye! from ConcreteImplemetor-1');
  }
}
