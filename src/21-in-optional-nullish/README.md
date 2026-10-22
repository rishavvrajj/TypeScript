# Module 21: The `in` Operator, Optional Chaining, and Nullish Coalescing

## Learning Objective
Master TypeScript's `in` type narrowing operator, optional chaining (`?.`), nullish coalescing (`??`), and nullish assignment (`??=`) for writing safe and concise code.

## Target Audience
Developers looking to handle optional properties, null/undefined checks, and discriminated/union type narrowing robustly in TypeScript.

## Prerequisites
- Completion of [Module 20: Typeof Type Operator](../20-typeof/README.md).

---

## Explanation in Simple Language
- **The `in` Operator**: Used to check if a property exists on an object, which TypeScript uses for type narrowing in union types.
- **Optional Chaining (`?.`)**: Safely accesses nested object properties or calls functions without throwing an error if an intermediate property is `null` or `undefined`.
- **Nullish Coalescing (`??`)**: Provides a fallback value only when the left-hand side is `null` or `undefined` (unlike logical OR `||` which also catches falsy values like `0`, `""`, or `false`).
- **Nullish Coalescing Assignment (`??=`)**: Assigns a default value to a variable only if it is currently `null` or `undefined`.

---

## Key Concepts & Rules
1. **Property Narrowing (`'prop' in obj`)**: Narrows union types based on whether a specific property exists.
2. **Short-circuiting (`?.`)**: Evaluates to `undefined` immediately if the reference is nullish.
3. **Nullish vs Falsy (`??` vs `||`)**: `0 ?? 42` is `0`, but `0 || 42` is `42`.

---

## Quick-Reference Code Examples
```typescript
type Admin = { role: "admin"; permissions: string[] };
type Guest = { role: "guest" };
type User = Admin | Guest;

function getPermissions(user: User) {
    if ("permissions" in user) {
        return user.permissions.join(", ");
    }
    return "No permissions";
}
```

---

## Common Mistakes
- Using `||` when `0` or `""` are valid values that should not be replaced by defaults.
- Forgetting that optional chaining returns `undefined` if any part of the chain is nullish.

---

## Practice Exercises
1. Write a function that accepts a user object which may or may not have an `address` object, and use optional chaining to safely get the city name.
2. Use nullish coalescing to assign a default timeout of `3000` to a configuration property if it is `null` or `undefined`.
