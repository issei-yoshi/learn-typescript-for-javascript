export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10

// console.log(typeof numberUnknown)
if (typeof numberUnknown === "number"){
  let sumUnknown = numberUnknown + 10
}
// if文を使わないと、unknown型は不明なので足し算できないかも、とエラーが出る
// 型を安全にしながらガードすることをタイプガードという

// console.log(sumAny);
