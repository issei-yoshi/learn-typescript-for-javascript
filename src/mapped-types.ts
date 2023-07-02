export {};

type Profile = {
  name: String;
  age?: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

type Optional<T> = {[P in keyof T]?: T[P]}
type OptionalProfile = Optional<Profile>