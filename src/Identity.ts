import { Functor1 } from './Functor'

declare module './HKT' {
  interface URI2HKT<A> {
    Identity: Identity<A>
  }
}

export const URI = 'Identity'
export type URI = typeof URI

export class Identity<A> implements Functor1<A, URI> {
  readonly _URI!: URI
  readonly _A!: A
  constructor(readonly value: A) {}
  map<B>(f: (a: A) => B): Identity<B> {
    return new Identity(f(this.value))
  }
}
