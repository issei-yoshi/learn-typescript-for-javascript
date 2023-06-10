export {}

let name: any = 'iy';

// asをつけると型アサーションを定義できる
let length = name.length as number;
// let length = (name as string).length;
// let length = (<string>name).length; 非推奨

console.log(length)







