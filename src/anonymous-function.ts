export {};

// 無名関数に対する型定義
let bmi: (height: number, weight: number) => number = function(
  // 引数に対する型定義
  height: number,
  weight: number
  // 返り値に関する型定義
): number {
  return weight / (height * weight);
};

console.log(bmi(1.78, 86));
