# Module 07: Special Types (`any`, `unknown`, `void`, `never`)

## Learning Objective
Understand TypeScript's top and bottom types (`any`, `unknown`, `void`, `never`) and how to use them safely.

## Target Audience
Beginners rounding out their core TypeScript knowledge.

## Prerequisites
- Completion of [Module 06: As Const](../06-as-const/README.md).

---

## Explanation in Simple Language
TypeScript has a few special types that represent edge cases:
- **`any`**: Turns off type checking. Avoid whenever possible!
- **`unknown`**: The safe cousin of `any`. You can assign anything to it, but you must narrow its type before using it.
- **`void`**: Represents a function that returns nothing.
- **`never`**: Represents a state that should never happen (used for throwing errors and exhaustive switch checks).

---

## Key Concepts & Rules
1. **`any` vs `unknown`**: Always prefer `unknown` when handling untrusted data.
2. **`never` for Exhaustive Checks**: Ensures all possible union branches are handled in switch statements.

---

## Quick-Reference Code Examples
```typescript
function fail(msg: string): never {
    throw new Error(msg);
}
```

---

## Common Mistakes
- Relying on `any` to silence compiler errors instead of correctly typing data or using `unknown`.

---

## Practice Exercises
1. Write a function with a `never` return type that throws a custom error.
2. Use `unknown` with a `typeof` check to safely process an input parameter.

---

## Conclusion
Congratulations on completing the TypeScript course! You now have a solid foundation to build robust TypeScript applications.
