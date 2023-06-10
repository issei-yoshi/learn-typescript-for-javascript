export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'ii';
  static lastName: string = 'yy';

  static work() {
    // return "Hi, are you ?"
    return `Hi, ${this.firstName}! ${Me.lastName}!`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());

//staticにするとインスタンスを作らなくても実行できる
