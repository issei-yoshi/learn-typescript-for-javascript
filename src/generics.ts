export {}

// Tは抽象的な型を示す、何の型にもなれる
// 引数の型と戻り値の型は一緒であるということになる
const echo = <T>(arg: T): T => {
  return arg
}

console.log(echo<number>(100));
console.log(echo<string>('hello!'));
console.log(echo<boolean>(true));


class Mirror<T> {
  constructor(public value: T){}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo())
console.log(new Mirror<string>("hello").echo())
console.log(new Mirror<boolean>(true).echo())
