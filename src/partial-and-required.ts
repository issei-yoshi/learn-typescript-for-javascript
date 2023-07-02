export {};

type Profile = {
  name: String;
  age?: number;
  zipCode: number;
};

// Partialに現在あるtypeをジェネリックとして渡すと、オプショナルなプロパティを追加してくれる
type PartialType = Partial<Profile>;

// 全てのプロパティの型を必須のものにしたい場合
type RequiredType = Required<Profile>
