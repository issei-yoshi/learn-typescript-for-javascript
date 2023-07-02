export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'iy',
  age: 20
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'nina',
  age: 45
}

// Readonlyのutility
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};