export {};

class VisaCard {
  // readonly owner: string;

  constructor(public readonly owner: string) {
    // this.owner = owner;
  }
}

let myVisaCard = new VisaCard('iy')
console.log(myVisaCard.owner);
// myVisaCard.owner = 'aaa'

// readonlyの場合には読み取り専用の属性になる
