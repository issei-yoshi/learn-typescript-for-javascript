export {};

let name = 'iy';

name = 'yi'

// as const をつけることでiy型となるため、別文字列で上書きできない、iyでのみ上書きできる
let nickname = 'iy' as const;


// as const をオブジェクトの外に記載すると別の値に上書きできない
// readonlyになるため、上書きしたくない場合は使える
let profile = {
  name: 'iy',
  height: 177
} as const ;

// profile.name = 'iiii'
// profile.height = 190
