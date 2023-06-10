export {};

class Person{
  public name: string;
  private age: number;
  protected nationality: string;

  // constructorの戻り値には型を書かない
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name is ${this.name}, age is ${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality)
  }

  profile(): string {
    return `name is ${this.name}, nationality is ${this.nationality}`
  }
}

let taro = new Person('Taro', 18, 'Japan');
console.log(taro.profile());
console.log(taro.name)
// console.log(taro.age)
