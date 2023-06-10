export {};

class Person  {
  // public name: string;
  // protected age: number;

  // 初期化する引数にpublicやprotectedのアクセス修飾子をつけると初期化処理してくれる
  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('iy', 26);
console.log(me)
