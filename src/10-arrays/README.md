# Module 10: Arrays in TypeScript

## Learning Objective
Learn how to type arrays, enforce strict element types, work with union arrays, and utilize read-only arrays to prevent unintended mutation.

## Target Audience
Developers mastering data structures and collections in TypeScript.

## Prerequisites
- Completion of [Module 09: Intersection Types](../09-intersection/README.md).

---

## Explanation in Simple Language
JavaScript arrays can hold mixed data types freely. TypeScript enhances arrays by enforcing strict type rules so that every element inside an array adheres to a specific type. You can also protect arrays against mutation using `readonly`.

---

## Key Concepts & Rules
1. **Array Syntaxes**: `number[]` and `Array<number>` (both are identical).
2. **Union Element Arrays**: `(string | number)[]` allows elements of either type.
3. **Readonly Arrays**: `readonly number[]` or `ReadonlyArray<number>` prevent modification of elements or pushing/popping.
4. **Typed Array Methods**: `map`, `filter`, and `reduce` retain full type safety.

---

## Quick-Reference Code Examples
```typescript
const scores: number[] = [85, 90, 95];
const readonlyScores: readonly number[] = [85, 90, 95];

// readonlyScores.push(100); // Error: Property 'push' does not exist
```

---

## Common Mistakes
- Writing `number | string[]` when you mean `(number | string)[]` (operator precedence trap).

---

## Practice Exercises
1. Create a readonly array of strings representing permitted user roles.
2. Write a function that filters an array of numbers to return only even numbers.

---

## Next Topic
Proceed to [Module 11: Tuples](../11-tuples/README.md).
