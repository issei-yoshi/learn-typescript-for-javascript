export {}

// Record<K, T>
type Prefetures = 'Tokyo' | 'Chiba' | 'Hiroshima';

type Covid19 = {
  name: string;
  cases: number
};

const covid19Japan: Record<Prefetures, Covid19> = {
  Tokyo: { name: '東京', cases: 20},
  Chiba: { name: '千葉', cases: 10},
  Hiroshima: { name: '広島', cases: 5},
}
