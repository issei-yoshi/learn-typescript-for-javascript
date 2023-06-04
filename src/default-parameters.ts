export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};
// 引数に=をつけることでデフォルト引数を設定することが可能

console.log(nextYearSalary(1000, 1.05));

console.log(nextYearSalary(1000));
