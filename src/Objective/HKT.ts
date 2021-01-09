export interface HKT<F, A> {
  _URI: F
  _A: A
}

export interface URI2HKT<A> {}

export type URIS = keyof URI2HKT<never>

export type Type<URI extends URIS, A> = URI2HKT<A>[URI]
