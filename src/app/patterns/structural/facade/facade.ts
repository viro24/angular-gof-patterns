import { Class1 } from './class-1';
import { Class2 } from './class-2';
import { Class3 } from './class-3';
import { Class4 } from './class-4';
import { Class5 } from './class-5';

export class Facade {
  private class3: Class3;
  private class4: Class4;
  private class5: Class5;

  constructor() {
    this.class3 = new Class3();
    this.class4 = new Class4();
    this.class5 = new Class5();
  }

  public attach<T>(instance: T): void {
    if (instance instanceof Class1) {
      instance.methodClass1();
    } else if (instance instanceof Class2) {
      instance.methodClass2();
    }
  }

  public constructed() {
    console.log('End Of Construction');
  }
}
