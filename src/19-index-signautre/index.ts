// TypeScript Learning Example: Index Signatures & Records
// This file demonstrates how to type dynamic object keys, dictionaries, Record utility types, and Maps.

export {};

// 1. Basic Index Signatures
// When property names are unknown beforehand but share a value type, use an index signature.
type NumberDict = { [k: string]: number };

const counters: NumberDict = {};

counters['Likes'] = 1;
counters['comments'] = 2;
counters['shares'] = 100;

console.log(`Counters -> Likes: ${counters['Likes']}, Shares: ${counters['shares']}`);

// 2. Strict Keys with `Record<K, T>`
// Instead of an open-ended string index signature, `Record` enforces precise key sets.
type Metrics = Record<'likes' | 'views' | 'shares', number>;

const mm: Metrics = {
    likes: 42,
    views: 1500,
    shares: 8
};

console.log(`Metrics views: ${mm.views}`);

// 3. Loose Maps with Optional Values (`Record<string, T | undefined>`)
// Useful when lookup keys may return undefined or be explicitly cleared.
type LooseMap = Record<string, number | undefined>;

const lm: LooseMap = {
    a: 1,
    b: 2,
    c: 4
};

lm["x"] = undefined;
lm["y"] = 100;

console.log(`LooseMap y: ${lm["y"]}, x: ${lm["x"]}`);

// 4. Using ES6 `Map<K, V>` for Runtime Key-Value Collections
// For complex keys or frequent insertions/deletions, native Map is often cleaner than plain objects.
const priceMap = new Map<string, number>();
priceMap.set('apple', 1.50);
priceMap.set('banana', 0.75);

console.log(`Price of apple: $${priceMap.get('apple')}`);