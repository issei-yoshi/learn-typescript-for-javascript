export {};

// objectは制約が甘い
let profile1: object = { name: 'iy' };
profile1 = { birth: 1345 };

let profile2: { name: string; } = { name: 'aa' };
// この場合、birthを入れることはできない
// profile2 = { birth: 1345 };
