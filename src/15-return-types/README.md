# Module 15: Function Return Types

## Learning Objective
Understand how TypeScript infers function return types and why explicit return type annotations are essential for robust APIs.

## Target Audience
Developers writing maintainable and scalable TypeScript codebases.

## Prerequisites
- Completion of [Module 14: Rest Parameters and Tuples](../14-rest-tuple/README.md).

---

## Explanation in Simple Language
When a function runs, it produces a result. TypeScript can **infer** what type of value a function returns based on its `return` statements. However, for exported functions and public APIs, explicitly annotating return types acts as documentation and protects against accidental code regressions.

---

## Key Concepts & Rules
1. **Inferred Return Types**: TypeScript deduces return type automatically.
2. **Explicit Annotations**: `function getUser(): User { ... }`
3. **Multiple Return Paths**: TypeScript verifies that all return branches match the declared return type.
4. **Async Functions**: Asynchronous functions automatically wrap return values in `Promise<T>`.

---

## Quick-Reference Code Examples
```typescript
async function fetchStatus(): Promise<string> {
    return "OK";
}
```

---

## Common Mistakes
- Forgetting that an async function without an explicit return type annotation returns `Promise<any>` or `Promise<unknown>` if not careful, though usually inferred as `Promise<T>`.

---

## Practice Exercises
1. Write a function with multiple return paths that returns a string or number based on a boolean flag, with an explicit return type.
2. Create an async function returning a typed object promise.

---

## Next Topic
Proceed to [Module 16: Interfaces](../16-interfaces/README.md).
