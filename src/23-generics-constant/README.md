# Module 23: Generic Constraints and the `keyof` Operator

## Learning Objective
Master generic constraints (`<T extends ...>`) and the `keyof` type operator combined with indexed access types (`T[K]`) to build type-safe object utilities and property extractors.

## Target Audience
Developers building advanced TypeScript utilities, data mappers, and type-safe helper functions for object manipulation.

## Prerequisites
- Completion of [Module 22: Generics](../22-generics/README.md).

---

## Explanation in Simple Language
- **Generic Constraints (`extends`)**: Tells TypeScript that a generic type parameter `<T>` is not just *any* type, but must possess certain properties or structure (e.g., `<T extends { length: number }>` ensures `T` has a `.length` property).
- **The `keyof` Operator**: Takes an object type and produces a string or numeric union of its literal keys (`keyof User` becomes `"id" | "name" | "age"`).
- **Indexed Access Types (`T[K]`)**: Looks up the type of a property `K` on type `T`.

---

## Key Concepts & Rules
1. **Constraining Type Parameters**: `function getLength<T extends { length: number }>(item: T): number`
2. **Keyof Constraints**: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]`
3. **Type-Safe Extraction**: Prevents passing invalid property names that don't exist on the object.

---

## Quick-Reference Code Examples
```typescript
type Person = { id: string; name: string };

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person: Person = { id: "1", name: "Alice" };
const userName = getProperty(person, "name"); // Inferred as string
```

---

## Common Mistakes
- Trying to access arbitrary property keys without constraining `K` with `keyof T`.
- Passing invalid property names (like `"address"` on an object that doesn't have it) resulting in TypeScript compile errors.

---

## Practice Exercises
1. Write a generic function `updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T` that updates an object property safely.
2. Create a generic function that filters an array of objects by a boolean property key.
