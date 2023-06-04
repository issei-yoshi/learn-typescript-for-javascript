export {};

// voidはreturn値がないことを指す
// エラーを返す型はneverとなる, エラー以外は値を入れることができない
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("way")
  console.log({ result })
} catch(error) {
  console.log({ error });
}