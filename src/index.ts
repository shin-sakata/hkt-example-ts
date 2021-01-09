import { map } from './Objective/Functor'
import { Identity } from './Objective/Identity'
import { some, Option } from './Objective/Option'

let x = some(1)
let y = new Identity(1)
const double = (n: number) => n * 2

// map関数がジェネリックになってる。
let result1: Option<number> = map(x, double)
let result2: Identity<number> = map(y, double)

console.log(x.map(double))
console.log(map(x, double))
console.log(map(y, double))
