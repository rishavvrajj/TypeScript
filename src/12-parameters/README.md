# Module 12: Parameter and Return Type Annotations

## Learning Objective
Learn how to explicitly annotate function parameters and return types to build robust, self-documenting, and type-safe functions.

## Target Audience
Developers writing functions and APIs in TypeScript.

## Prerequisites
- Completion of [Module 11: Tuples](../11-tuples/README.md).

---

## Explanation in Simple Language
Functions are the fundamental building blocks of JavaScript and TypeScript applications. By explicitly typing function parameters and return values, you document expected inputs and outputs while letting TypeScript prevent invalid calls before your code runs.

---

## Key Concepts & Rules
1. **Parameter Typing**: `function add(a: number, b: number): number`
2. **Arrow Functions**: `const multiply = (a: number, b: number): number => a * b;`
3. **Object Parameters**: Typing function parameters with object shapes or interfaces.
4. **Void and Never**: Using `void` for functions with no meaningful return and `never` for functions that throw or loop indefinitely.

---

## Quick-Reference Code Examples
```typescript
function calculateTax(amount: number, rate: number = 0.05): number {
    return amount * rate;
}
```

---

## Common Mistakes
- Omitting parameter annotations on public functions where inference isn't possible (e.g., untyped parameters default to `any` under implicitAny).

---

## Practice Exercises
1. Write a function that takes a first name and last name (both strings) and returns a formatted full name.
2. Write a function that accepts an object with `width` and `height` properties and returns the area.

---

## Next Topic
Proceed to [Module 13: Optional and Default Parameters](../13-optioanl-default/README.md).
