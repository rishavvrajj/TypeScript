# Module 05: Type Assertions and Type Guards

## Learning Objective
Understand when and how to use type assertions (`as`), non-null assertions (`!`), and safe runtime type guards (`v is Type`).

## Target Audience
Beginners learning how to bridge unknown data (like JSON or DOM elements) with TypeScript's type system.

## Prerequisites
- Completion of [Module 04: Objects](../04-objects/README.md).

---

## Explanation in Simple Language
Sometimes you know more about a value's exact type than TypeScript does (e.g., parsing a JSON string). **Type assertions** (`as`) tell the compiler to trust your judgment. However, assertions bypass safety checks and can cause runtime bugs if incorrect. **Type guards** (`v is Type`) provide a safe, runtime-checked alternative.

---

## Key Concepts & Rules
1. **Type Assertions (`as`)**: `JSON.parse(data) as User`
2. **Non-Null Assertions (`!`)**: Asserts a value is never `null` or `undefined`.
3. **User-Defined Type Guards (`v is Type`)**: Functions that return a boolean type predicate to safely validate unknown data at runtime.

---

## Quick-Reference Code Examples
```typescript
function isUser(v: unknown): v is User {
    return typeof v === "object" && v !== null && "id" in v;
}
```

---

## Common Mistakes
- Overusing `as` assertions blindly on untrusted external data, leading to silent runtime crashes when properties are missing.

---

## Practice Exercises
1. Parse a JSON string into an `unknown` variable.
2. Write a type guard function to check if the parsed data has a valid `id` and `name`.

---

## Next Topic
Proceed to [Module 06: As Const](../06-as-const/README.md).
