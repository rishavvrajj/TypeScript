# Module 02: Type Inference

## Learning Objective
Understand how TypeScript automatically detects types (`type inference`) and when to use explicit type annotations vs letting TypeScript do the work.

## Target Audience
Absolute beginners learning TypeScript.

## Prerequisites
- Completion of [Module 01: Primitives](../01-primitives/README.md).

---

## Explanation in Simple Language
TypeScript is smart. Even if you don't explicitly write `: string` or `: number` next to every variable, TypeScript looks at the initial value you assign and **infers** (guesses correctly) what type it is. This keeps your code clean while keeping type safety fully active.

---

## Key Concepts & Rules
1. **Implicit Inference**: `let count = 0;` tells TypeScript `count` is a `number`. Reassigning `count = "hello"` will trigger a type error.
2. **Explicit Annotation**: Writing `const site: string = "example.com";` explicitly tells TypeScript the intended type.
3. **Best Practice**: Let TypeScript infer types when the value is obvious; use explicit annotations for function signatures, complex objects, or variables that start empty.

---

## Quick-Reference Code Examples
```typescript
// Inferred as number
let score = 95;

// Explicit annotation
let username: string = "Bob";

// Union inference
let maybeNumberOrString = Math.random() > 0.5 ? "Yes" : 42; // string | number
```

---

## Common Mistakes
- **Over-annotating**: Writing `: number` on every single variable (`let x: number = 5;`) which creates unnecessary noise.
- **Forgetting Type Widening on `let` vs `const`**: `let` variables widen to general types, whereas `const` primitives stay as exact literal types.

---

## Practice Exercises
1. Create a variable without explicit type annotation, assign a boolean to it, and try reassigning a number. Observe the compiler error.
2. Write a function with explicit parameter and return types that adds two numbers.

---

## Next Topic
Proceed to [Module 03: Literals](../03-literals/README.md).
