export {};

// owner 所有者 途中で変更不可 参照可能: getter
// secretNumber 個人番号 途中で変更可能 参照不可 setter

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number){
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner () {
    return this._owner
  }

  set secretNumber (secretNumber: number) {
    this._secretNumber = secretNumber
  }

  debugPrint(){
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('iy', 1234);
card.debugPrint
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 11101;
console.log(card.debugPrint());