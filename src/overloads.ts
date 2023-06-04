export {};

// シグネチャー、この2つのデータは受け取ることができる
function double(value: number): number;
function double(value: string): string;

// 実態は一つしか書けない
function double(value: any): any{
  if(typeof value == "number"){
    return value * 2;
  } else {
    return value + value;
  }
};

// function double(value: string): string{
//   return value + value;
// };

console.log(double(100));
console.log(double('Go'));
