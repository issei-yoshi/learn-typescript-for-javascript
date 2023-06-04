export {};

// 関数からのreturn値がないことを期待する型がvoid
function returnNothing(): void {
  console.log("return Nothing");
}

console.log(returnNothing());
