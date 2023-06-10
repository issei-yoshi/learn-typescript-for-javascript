export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry(){
    return 'roar';
  }
}

// 抽象クラスにしておくことで絶対に実装が必要なメソッドがオーバーライドされてないとエラーが出る
class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}
