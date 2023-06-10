export {};

class Person{
  name: string;
  age: number;

  // constructorの戻り値には型を書かない
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name is ${this.name}, age is ${this.age}`
  }
}
let taro = new Person('Taro', 18);
console.log(taro.profile());