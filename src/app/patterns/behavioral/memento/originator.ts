import { Memento } from './memento';

export class Originator {
  private name: string;

  public saveToMemento(): Memento {
    console.log('Save Memento... ' + this.name);
    return new Memento(this.name);
  }

  public restoreFromMemento(memento: Memento) {
    this.name = memento.getSavedState();
  }

  public setName(name: string): void {
    this.name = name;
  }
}
