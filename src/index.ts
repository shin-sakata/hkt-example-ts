import { map } from './Functor'
import { Identity } from './Identity'
import { some, Option } from './Option'

let x = some(1)
let y = new Identity(1)
const double = (n: number) => n * 2

let result1: Option<number> = map(x, double)

let result2 = map(y, double)

console.log(x.map(double))
console.log(map(x, double))
console.log(map(y, double))
