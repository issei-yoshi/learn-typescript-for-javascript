export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// pickを使うと欲しいものだけを選べる
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>

// omitを使うと不要なものを除外できる
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type SmallProfile = Omit<DetailedProfile, 'height'>
