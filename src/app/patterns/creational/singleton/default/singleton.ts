export class Singleton {
  private static singleton: Singleton = new Singleton();

  constructor() {
    return Singleton.getSingleton();
  }

  public static getSingleton(): Singleton {
    return Singleton.singleton;
  }
}
