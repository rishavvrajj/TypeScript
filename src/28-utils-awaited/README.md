# Module 28: The `Awaited` Utility Type

## Learning Objective
Master the `Awaited<T>` utility type to recursively unwrap promises, nested promises, and thenables, enabling precise type inference for asynchronous operations.

## Target Audience
Developers working extensively with `async/await`, REST/GraphQL APIs, and promise-based data fetching in TypeScript.

## Prerequisites
- Completion of [Module 27: Conditional and Filtering Utility Types](../27-utils-helper/README.md).

---

## Explanation in Simple Language
When you call an `async` function or `Promise.resolve()`, the resulting type is wrapped in a `Promise<T>`. If you want to know what type you actually get *after* `await`ing that promise, TypeScript provides `Awaited<T>`. 
- It handles single promises (`Promise<number>` → `number`).
- It handles nested promises (`Promise<Promise<string>>` → `string`).
- It handles non-promise types (passing `string` to `Awaited<string>` just returns `string`).

---

## Key Concepts & Rules
1. **Recursive Unwrapping**: Automatically unwraps arbitrary nesting levels of promises.
2. **Combining with `ReturnType`**: `type Data = Awaited<ReturnType<typeof fetchUserData>>` is the gold standard for typing resolved async data without duplicating interfaces.

---

## Quick-Reference Code Examples
```typescript
async function fetchUser() {
    return { id: "1", name: "Alice" };
}

type UserType = Awaited<ReturnType<typeof fetchUser>>; // { id: string; name: string; }
```

---

## Common Mistakes
- Trying to type an async function's return value with `ReturnType<typeof fn>` directly, which results in `Promise<T>` instead of the resolved data type `T`.

---

## Practice Exercises
1. Create an async function that returns an array of user IDs, and use `Awaited<ReturnType<typeof fn>>` to extract the unwrapped array type.
2. Use `Awaited` on a union of promises (`Promise<string> | Promise<number>`).
