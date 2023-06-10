export {};

class Witch {}

// TSは単一継承なので多重継承はできない
// 複数のinterfaceを継承のようなことができる
class Taro extends Witch{}

interface Kenja {
  defense(): void;
}

interface Senshi {
  attack(): void;
}

// KenjaとSenshiを継承している
class Jiro implements Kenja, Senshi {
  defense(): void {
    console.log('defense');
  }
  attack(): void{
    console.log('attack');
  }
}

const jiro = new Jiro();
jiro.defense();
jiro.attack();