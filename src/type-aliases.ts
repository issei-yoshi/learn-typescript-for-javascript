export {};

// 先頭の文字は大文字
type Moon = string;

const foo1: string = 'hello';
const foo2: Moon = 'hello';

// objectの場合にも可能
type User = {
  name: string;
  age: number;
};

const example1: User = {
  name: 'iy',
  age: 23
};

// typeofで既にある型(type)を元にtypeを作成することができる
type Profile = typeof example1
