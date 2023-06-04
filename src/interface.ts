export {};

// typeを使ったアノテーション,型エイリアスのため=が必要
type ObjectType = {name: string; age: number};

// interfaceは=が不要
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'iy',
  age: 31
};

// typeとinterfaceの違いはクラスの学習で行う
