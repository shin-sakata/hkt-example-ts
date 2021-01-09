import { Functor1 } from './Functor'

declare module './HKT' {
  interface URI2HKT<A> {
    Option: Option<A>
  }
}

export const URI = 'Option'
export type URI = typeof URI

export interface Option<A> extends Functor1<A, URI> {
  readonly tag: string
  map<B>(f: (a: A) => B): Option<B>
}

export class None<A> implements Option<A> {
  readonly _URI!: URI
  readonly _A!: A
  readonly tag = 'None' as const
  map<B>(_: (a: A) => B): Option<B> {
    return none
  }
}

export class Some<A> implements Option<A> {
  readonly _URI!: URI
  readonly _A!: A
  readonly tag = 'Some' as const
  constructor(readonly value: A) {}
  map<B>(f: (a: A) => B): Option<B> {
    return some(f(this.value))
  }
}

// helper
export const none: Option<never> = new None()

export const some = <A>(a: A): Option<A> => new Some(a)
