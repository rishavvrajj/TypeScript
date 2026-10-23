# Module 26: Function and Constructor Utility Types

## Learning Objective
Master function and constructor utility types (`ReturnType<T>`, `Parameters<T>`, `InstanceType<T>`, and `ConstructorParameters<T>`) to inspect, extract, and reuse types from existing functions and classes.

## Target Audience
Developers building advanced TypeScript utility wrappers, higher-order functions, factory patterns, or dependency injection systems.

## Prerequisites
- Completion of [Module 25: Built-in Utility Types](../25-utils/README.md).

---

## Explanation in Simple Language
When working with third-party libraries, complex functions, or classes, you often need to derive types directly from their implementation rather than rewriting them manually:
- **`ReturnType<T>`**: Extracts what a function returns (`typeof fn`).
- **`Parameters<T>`**: Extracts the parameter list of a function as a tuple type (`[string, boolean]`).
- **`InstanceType<T>`**: Extracts the instance type of a class constructor (`typeof MyClass`).
- **`ConstructorParameters<T>`**: Extracts the parameter types of a class constructor as a tuple.

---

## Key Concepts & Rules
1. **Combining with `typeof`**: Utility types like `Parameters` and `ReturnType` operate on *types*, so you use `typeof fn` to reference a function value's type.
2. **Tuple Spread (`...args`)**: `Parameters<typeof fn>` produces a tuple that can be spread into function calls: `fn(...args)`.

---

## Quick-Reference Code Examples
```typescript
function createUser(name: string, age: number) {
    return { name, age, active: true };
}

type UserParams = Parameters<typeof createUser>; // [string, number]
type UserResult = ReturnType<typeof createUser>; // { name: string; age: number; active: boolean; }
```

---

## Common Mistakes
- Trying to pass a function value directly to `Parameters` without using `typeof` (since `Parameters` expects a type, not a runtime value).

---

## Practice Exercises
1. Create a function `apiCall(endpoint: string, timeout: number)` and use `Parameters` and `ReturnType` to type a mock wrapper function.
2. Define a class `DatabaseConnection` and use `InstanceType` and `ConstructorParameters` to type its connection factory.
