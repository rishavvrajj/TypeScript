# Module 24: Generic Property Accessors and Mutators

## Learning Objective
Master generic getter, setter, and updater functions using `<T, K extends keyof T>` and indexed access types (`T[K]`) to build type-safe property access layers and immutable update helpers.

## Target Audience
Developers building type-safe state management, form handlers, entity wrappers, or data access layers in TypeScript.

## Prerequisites
- Completion of [Module 23: Generic Constraints and Keyof](../23-generics-constant/README.md).

---

## Explanation in Simple Language
When reading or writing object properties dynamically via helper functions:
- A **getter** must return the exact type corresponding to the accessed key (`T[K]`).
- A **setter** must strictly accept only values matching that specific property's type (`value: T[K]`), preventing runtime type mismatches (such as assigning a string to a numeric property).
- An **immutable updater** produces a new copy of the object with the specified key updated, preserving immutability and complete type safety.

---

## Key Concepts & Rules
1. **Generic Getter**: `function getProp<T, K extends keyof T>(obj: T, key: K): T[K]`
2. **Generic Setter (Mutating)**: `function setProp<T, K extends keyof T>(obj: T, key: K, val: T[K]): void`
3. **Immutable Updater**: `function updateProp<T, K extends keyof T>(obj: T, key: K, val: T[K]): T`
4. **Value-Type Alignment**: TypeScript ensures `val` is strictly constrained to `T[K]`, rejecting incorrect assignments at compile time.

---

## Quick-Reference Code Examples
```typescript
type User = { id: string; age: number };

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

function setProp<T, K extends keyof T>(obj: T, key: K, val: T[K]): void {
    obj[key] = val;
}

const user: User = { id: "u1", age: 25 };
setProp(user, "age", 26);     // Valid: 26 is number
// setProp(user, "age", "26"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

---

## Common Mistakes
- Assigning `any` or `unknown` as the setter's value parameter instead of `T[K]`, which defeats TypeScript's type-checking.
- Forgetting that optional properties on an object have the type `T[K] | undefined`.

---

## Practice Exercises
1. Create a generic function `hasPropWithValue<T, K extends keyof T>(obj: T, key: K, expected: T[K]): boolean` that checks if a property matches an expected value.
2. Build an immutable updater `batchUpdateProps<T>(obj: T, partial: Partial<T>): T` that applies multiple updates safely.
