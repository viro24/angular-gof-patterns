import { Item } from './item';

export interface Iterator {
  next(): Item;
}
