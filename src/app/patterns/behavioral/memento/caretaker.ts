import { Memento } from './memento';

export class Caretaker {
  private savedStates: Array<Memento> = [];

  public addMemento(memento: Memento): void {
    this.savedStates.push(memento);
  }

  public getMemento(index: number): Memento {
    return this.savedStates[index];
  }
}
