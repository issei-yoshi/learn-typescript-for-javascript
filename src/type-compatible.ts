export {};

let fooCompatible: any;
let barCompatible: string = 'TS';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// 型の互換性がない場合はエラーが出る
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'st';
fooString = barString;


let fooStringLiteral: 'foo' = 'foo';
fooString = fooStringLiteral;

// PersonとAnimalは全く関係ないものだが代入できる
// なぜかというとオブジェクトを代入するときは型の互換性を持つから
interface Animal {
  age: number;
  name: string;
  // ここはエラーが起きる、なぜならinterfaceではnameが求められるから
}

class Person {
  constructor(public age: number, public name: string){}
}

let me: Animal;

me = new Person(20, 'iy')
