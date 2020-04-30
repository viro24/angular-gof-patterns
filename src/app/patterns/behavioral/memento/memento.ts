export class Memento {
  private state: string;

  constructor(stateToSave: string) {
    this.state = stateToSave;
  }

  public getSavedState(): string {
    return this.state;
  }
}
