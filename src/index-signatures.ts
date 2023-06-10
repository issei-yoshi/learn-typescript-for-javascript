export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean
}

// 本来はpropertyが追加されることをあらかじめ設定しておかないといけない
// let profile: {name?: string} = {}
let profile: Profile = { name: 'iy', underTwenty: false }

profile.name = 'iy';
profile.age = 20;
profile.nationality = 'japan';

// {[ index: typeForIndex]: typeForValue}
