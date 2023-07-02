export {}

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Excludeを使うと、不要な型を除外できる
// type Exclude<T, U> = T extends U ? never : T;
type FunctionType = Exclude<SomeTypes, string | number>;
type ExcludeFunction = Exclude<SomeTypes, Function>;

// Extractを使うと、使いたい型を抽出できる
// type Extract<T, U> = T extends U ? T : never;
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>

// NonNullableを使うとnullを除外することができる
// type NonNullable<T> = T & {};
type NullableTypes = string | number | null |undefined;
type NonNullableTypes = NonNullable<NullableTypes>
