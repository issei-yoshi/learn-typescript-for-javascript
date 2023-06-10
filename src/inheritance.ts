export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name); //親が初期処理を実行

    this.speed = speed; //このクラスで初期処理を実行
  }

  run(): string {
    const parentMessage = super.run(); //returnをそのまま継承できる
    return `${parentMessage} ${this.speed}km!`
    // return 'I can run! man!'
  }
}


// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('mic'))
console.log(new Lion('simba', 80).run())
