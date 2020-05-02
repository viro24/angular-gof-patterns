import { Color } from './color';
import { ConcreteFlyweight } from './concrete-flyweight';

export class FlyweightFactory {
  private cache: Array<{ color: Color; concreteFlyweight: ConcreteFlyweight }> = [];

  public getFlyweight(key: Color): ConcreteFlyweight {
    return this.cache.find(cache => cache.color === key)?.concreteFlyweight || this.add(key);
  }

  private add(key: Color): ConcreteFlyweight {
    let instanceFlyweight = new ConcreteFlyweight(key);
    this.cache.push({ color: key, concreteFlyweight: instanceFlyweight });
    return instanceFlyweight;
  }
}
