export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => weight / (height * weight);

// アノテーションと引数の部分に?をつけることでオプショナルな引数にすることができる

bmi(1.78, 70);
