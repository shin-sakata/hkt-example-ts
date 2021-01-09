import { URIS, Type } from './HKT'

export interface Functor1<A, F extends URIS> {
  readonly _URI: F
  readonly _A: A
  map: <B>(f: (a: A) => B) => Type<F, B>
}

export function map<A, B, F extends URIS>(
  a: Functor1<A, F>,
  f: (a: A) => B
): Type<F, B> {
  return a.map(f)
}
