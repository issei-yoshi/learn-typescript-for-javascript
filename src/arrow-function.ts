export {};

// アロー関数に対する型定義
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * weight)
};

console.log(bmi(1.77, 70));
