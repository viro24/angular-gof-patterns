import { Logger } from 'src/app/app.component';
import { Memento } from './memento';

export class Originator {
  private name: string;

  public saveToMemento(): Memento {
    Logger.debug('Save Memento... ' + this.name);
    return new Memento(this.name);
  }

  public restoreFromMemento(memento: Memento) {
    this.name = memento.getSavedState();
  }

  public setName(name: string): void {
    this.name = name;
  }
}
