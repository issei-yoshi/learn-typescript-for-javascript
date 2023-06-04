export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Tome: Pitcher1 = {
  throwingSpeed: 150
};

const John: Batter1 = {
  battingAverage: 0.5
};

// InterSectionを使うことで（実際にその単語は出てこないが）既存の型を組み合わせて型を作ることができる
type TwoWay = Pitcher1 & Batter1

const Shohei: TwoWay = {
  throwingSpeed: 160,
  battingAverage: 0.5
};
