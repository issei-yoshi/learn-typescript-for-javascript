export {};

// nullを設定できないと怒られてしまう
// tsconfig.jsonのオプションをfalseにするとエラーは出なくなる、が望ましくない
let profile: {name: string; age: number | null} = {
  name: 'iy',
  age: null
}
