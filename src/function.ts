export {};

function bmi(height: number, weight: number): number {
  return weight / (height * weight);
}

console.log(bmi(1.77, 70));
