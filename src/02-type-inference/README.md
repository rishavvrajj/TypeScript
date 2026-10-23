# Module 02: Type Inference and Annotations

## What the Topic Is
Type inference is TypeScript's ability to automatically deduce the types of variables, return values, and expressions based on their assigned values without requiring explicit type annotations.

## Why It Matters
Type inference reduces boilerplate while preserving full type safety. It allows you to write concise code while letting the TypeScript compiler track types behind the scenes.

## Complete Code Example
```typescript
// TypeScript Learning Example: Basic Type Inference and Annotations
// This file demonstrates TypeScript's type inference capabilities and explicit type annotations

// Basic type inference - TypeScript automatically infers the type
let count = 0; // inferred as number

// Explicit type annotation - useful when we want to be specific
const site: string = "example.com";

// Array type inference - TypeScript infers number[]
const scores = [10, 20, 30];

// Union types - a variable that can hold multiple types
let maybe: string | number;

// Type inference in action - TypeScript infers string | number
maybe = Math.random() > 0.5 ? "Test" : 10;

// Function with explicit parameter and return type annotations
export function add(a: number, b: number): number {
    return a + b;
}

// Calling the function and logging the result
console.log(add(5, 5));

// Demonstrating type safety - this would cause a TypeScript error:
// maybe = {}; // Error: Type '{}' is not assignable to type 'string | number'.

// Interface example for object typing
interface User {
    id: number;
    name: string;
    email?: string; // optional property
}

// Creating a user object with type inference
const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};

console.log(`User: ${user.name}`);
```

## How the Code Works Line by Line
1. **Inference**: `let count = 0;` is automatically inferred as `number`.
2. **Explicit Annotation**: `const site: string = ...` forces TypeScript to enforce string values.
3. **Array Inference**: `scores` is inferred as `number[]`.
4. **Union Assignment**: `maybe` can hold either a `string` or a `number`.
5. **Functions**: `add` explicitly types parameters and return values as `number`.
6. **Interfaces**: `User` defines an object contract with an optional `email`.

## Expected Output
```text
10
User: Alice
```

## Common Mistakes & Anti-Patterns
- Over-annotating every single local variable where inference already provides the exact correct type.
- Forgetting to annotate function parameters and public return types, leading to implicit `any` errors when strict mode is active.
