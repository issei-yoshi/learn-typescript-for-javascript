export {};

const reducer = (accumulator:number, currentVal: number): number => {
  return accumulator + currentVal;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  // console.log(values);
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
