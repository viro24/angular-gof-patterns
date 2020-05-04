export class Singleton {
  private static singleton: Singleton;

  private constructor() {}

  public static getSingleton(): Singleton {
    if (Singleton.singleton === undefined) {
      Singleton.singleton = new Singleton();
    }
    return Singleton.singleton;
  }
}
