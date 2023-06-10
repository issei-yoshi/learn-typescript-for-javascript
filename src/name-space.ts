export {};

namespace Japanese {
  export namespace Tokyo { //名前空間であっても外側から見えないのでexportする必要あり
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('iy')
console.log(me.name);

const Yoseph = new English.Person('Jackson', 'Joseph', 'Michael');
console.log(Yoseph)
