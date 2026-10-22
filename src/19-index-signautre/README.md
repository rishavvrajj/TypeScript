# Module 19: Index Signatures & Records

## Learning Objective
Master TypeScript index signatures (`{[key: string]: T}`), `Record<K, T>`, and dynamic key-value storage patterns.

## Target Audience
Developers building dynamic dictionaries, caches, configuration objects, and lookup maps in TypeScript.

## Prerequisites
- Completion of [Module 17: Type Aliases](../17-type-aliases/README.md) and [Module 18: Interfaces vs. Type Aliases](../18-Interface-vs-Types/README.md).

---

## Explanation in Simple Language
When you don't know the exact property names an object will have ahead of time (e.g., dynamic configuration or counters), but you know the type of their values, you use an **Index Signature** (`{[key: string]: valueType}`). Alternatively, TypeScript provides the `Record<K, T>` utility type for structured key-value maps.

---

## Key Concepts & Rules
1. **Index Signature Syntax**: `type StringDictionary = { [key: string]: string };`
2. **Key Types**: Index signature keys can be `string` or `number` (or template literal types).
3. **`Record<K, T>` Utility**: `Record<'admin' | 'user', number>` restricts keys to a precise union of strings.
4. **`Map<K, V>`**: For dynamic runtime lookup tables where keys might not be strings (or arbitrary objects), ES6 `Map` is often preferred.

---

## Quick-Reference Code Examples
```typescript
type Counters = { [key: string]: number };
const views: Counters = { home: 120, about: 45 };

type StatusMap = Record<'pending' | 'success' | 'failed', boolean>;
const flags: StatusMap = { pending: true, success: false, failed: false };
```

---

## Common Mistakes
- Forgetting that string index signatures automatically allow numeric indexing in JavaScript/TypeScript (since numbers are converted to strings when indexing objects).
- Accessing missing keys returning `undefined` without checking or handling optional types.

---

## Practice Exercises
1. Create a dictionary type for user preferences using an index signature.
2. Use `Record<K, T>` to model a fixed-key settings map.

---

## Course Conclusion
You now have powerful tools for handling dynamic key-value structures in TypeScript!
