# Module 01: Primitives in TypeScript

## Learning Objective
Understand and correctly use TypeScript's fundamental built-in data types: `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, and `undefined`.

## Target Audience
Absolute beginners learning TypeScript who want a firm foundation in basic data typing.

## Prerequisites
- Basic familiarity with JavaScript variables and data types.
- Node.js installed on your machine.

---

## Explanation in Simple Language
In JavaScript, variables can hold any data type and change types freely. TypeScript introduces **static typing** to catch errors before your code runs. 
Primitive types are the most basic building blocks of data. When you declare a variable with a primitive type, TypeScript ensures that value always stays of that specific type.

---

## Key Concepts & Rules
1. **`string`**: Textual data enclosed in quotes (`"hello"`, `'world'`, `` `template ${var}` ``).
2. **`number`**: Both integers and decimals (`42`, `3.14`, `0xf00d`). TypeScript does not have a separate integer type.
3. **`boolean`**: Logical values (`true` or `false`).
4. **`bigint`**: For extremely large integers exceeding `Number.MAX_SAFE_INTEGER` (written with an `n` suffix, e.g., `9007199254740991n`). You cannot mix `number` and `bigint` without explicit casting.
5. **`symbol`**: Creates globally unique, immutable identifiers (`Symbol('id')`).
6. **`null` & `undefined`**: Represent intentional absence of value (`null`) or uninitialized variables (`undefined`). Under strict mode, they are strictly checked.

---

## Quick-Reference Code Examples
```typescript
let username: string = "Alice";
let age: number = 30;
let isCreator: boolean = true;
let hugeNumber: bigint = 9000000000000000n;
```

---

## Common Mistakes
- **Mixing Number and BigInt**: Trying to add `number + bigint` directly results in a TypeScript compile error.
- **Ignoring Strict Null Checks**: Assigning `null` to a `string` variable without allowing union types (`string | null`).

---

## Practice Exercises
1. Declare a variable for your favorite programming language (`string`), your years of experience (`number`), and whether you love coding (`boolean`).
2. Write a function that calculates your total months alive given your age in years.

---

## Next Topic
Proceed to [Module 02: Type Inference](../02-type-inference/README.md).
