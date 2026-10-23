# Module 22: Generics in TypeScript

## Learning Objective
Master TypeScript Generics (`<T>`) to write reusable, flexible, and strictly type-safe functions, interfaces, and classes without resorting to `any` or `unknown`.

## Target Audience
Developers building reusable utility functions, components, or data structures that need to operate across multiple types while preserving exact type information.

## Prerequisites
- Completion of [Module 20: Typeof Type Operator](../20-typeof/README.md) and [Module 21: Optional Chaining & Nullish Coalescing](../21-in-optional-nullish/README.md).

---

## Explanation in Simple Language
Think of generics as **variables for types**. Instead of writing separate functions for `string`, `number`, or custom objects, you write a single function with a type parameter (like `<T>`). When you call the function, TypeScript captures the exact type you pass in and ensures input-to-output type fidelity.

---

## Key Concepts & Rules
1. **Type Parameters (`<T>`)**: A placeholder for a type supplied when the function or class is invoked.
2. **Generic Constraints (`<T extends ...>`)**: Restricting what types can be passed to `<T>` (e.g., ensuring an object has a `.length` property).
3. **Multiple Type Parameters (`<T, U>`)**: Using multiple generic placeholders for functions or mappings between two different types.
4. **Generics vs. `unknown`**: `unknown` accepts any type but discards specific type information (requiring type guards or assertions), whereas `<T>` remembers and preserves the exact type passed in.

---

## Quick-Reference Code Examples
```typescript
function identity<T>(value: T): T {
    return value;
}

const num = identity(42);    // Inferred as number
const str = identity("hello"); // Inferred as string
```

---

## Common Mistakes
- Using `any` instead of generics, which completely disables TypeScript's type-checking and inference.
- Forgetting that generic constraints are required when you need to access specific properties on a generic type.

---

## Practice Exercises
1. Write a generic function `reverseArray<T>(arr: T[]): T[]` that returns a reversed copy of any array.
2. Create a generic interface `Box<T>` that holds a value of type `T` and a timestamp `Date`.
