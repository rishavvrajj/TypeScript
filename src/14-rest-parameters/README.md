# Module 14: Rest Parameters and Tuples

## Learning Objective
Learn how to use rest parameters (`...args`) with typed arrays and tuples, and how to spread fixed tuples safely into function calls.

## Target Audience
Developers building variadic functions and utility wrappers in TypeScript.

## Prerequisites
- Completion of [Module 13: Optional and Default Parameters](../13-optioanl-default/README.md).

---

## Explanation in Simple Language
Rest parameters allow a function to accept an **indefinite number of arguments** as an array. In TypeScript, you can type rest parameters as arrays (`number[]`) or as fixed-length tuples, ensuring complete type safety when collecting or spreading arguments.

---

## Key Concepts & Rules
1. **Basic Rest Parameters**: `function sum(...nums: number[]): number`
2. **Rest with Tuples**: `...args: [start: number, end: number, step?: number]`
3. **Spreading Tuples**: Using `as const` or explicit tuple annotations when passing array variables into fixed-parameter functions.

---

## Quick-Reference Code Examples
```typescript
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, n) => acc + n, 0);
}

const point = [10, 20] as const;
function draw(x: number, y: number) {}
draw(...point); // Valid
```

---

## Common Mistakes
- Trying to spread a standard mutable array (`number[]`) into a function expecting fixed positional parameters without `as const` or tuple typing.

---

## Practice Exercises
1. Write a variadic function that concatenates any number of string arguments with a separator.
2. Create a tuple representing 3D coordinates and spread it into a logging function.

---

## Next Topic
Proceed to [Module 15: Function Return Types](../15-return-type/README.md).
