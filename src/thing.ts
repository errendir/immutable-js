//import { Record } from '../'

type T1 = { a: number };
type T2 = T1 & { b: string };
type T3 = () => void;
type T4 = [string, number];

type Named<T> = T & { name: string };

interface N1 extends Named<T1> {
  x: string;
} // { a: number, name: string, x: string }
interface N2 extends Named<T2> {
  x: string;
} // { a: number, b: string, name: string, x: string }

interface P1 extends Partial<T1> {
  x: string;
} // { a?: number | undefined, x: string }

// const Thing = Record({ a: 11 as number })

// const thingA = Thing()
// console.log(thingA.a + 11)
// thingA.a = 12
