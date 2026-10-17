# Module 06: Const Assertions (`as const`)

## Learning Objective
Master `as const` assertions to create immutable data structures and automatically derive precise union types from arrays and objects.

## Target Audience
Beginners advancing to intermediate TypeScript patterns.

## Prerequisites
- Completion of [Module 05: Type Assertions](../05-type-assertions/README.md).

---

## Explanation in Simple Language
By default, TypeScript infers broad types for arrays (`string[]`) and objects (`{ foo: string }`). By appending `as const` to the end of an array or object literal, you tell TypeScript to **deeply freeze** it into exact read-only literal types. You can then extract union types directly from them using `(typeof ARR)[number]`.

---

## Key Concepts & Rules
1. **Array Const Assertion**: `const ROLES = ["admin", "user"] as const;`
2. **Derived Union Type**: `type Role = (typeof ROLES)[number];` ("admin" | "user")
3. **Object Const Assertion**: Freezes all object properties as `readonly` literals.

---

## Quick-Reference Code Examples
```typescript
const ROLES = ["admin", "user", "operator"] as const;
type Role = (typeof ROLES)[number]; // "admin" | "user" | "operator"
```

---

## Common Mistakes
- Forgetting that `as const` makes all properties `readonly`, preventing later mutations.

---

## Practice Exercises
1. Define a `const` array of supported programming languages using `as const`.
2. Derive a union type from it and write a function that accepts only valid languages.

---

## Next Topic
Proceed to [Module 07: Special Types](../07-special-types/README.md).
