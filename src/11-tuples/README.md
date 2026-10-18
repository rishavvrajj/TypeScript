# Module 11: Tuples

## Learning Objective
Master tuples—fixed-length arrays with known, specific types at each position—and labeled tuples for enhanced code readability.

## Target Audience
Developers working with structured data pairs, coordinates, and multi-value returns.

## Prerequisites
- Completion of [Module 10: Arrays](../10-array/README.md).

---

## Explanation in Simple Language
While a normal array (`number[]`) can contain any number of elements of the same type, a **tuple** (`[string, number]`) is an array with a **fixed number of elements** where each position has its own specific type. Think of it like a row in a database table or a function returning multiple typed values.

---

## Key Concepts & Rules
1. **Basic Tuple**: `const pair: [string, number] = ["hello", 42];`
2. **Labeled Tuples**: `type Point = [x: number, y: number];` documenting what each element represents.
3. **Readonly Tuples**: `readonly [string, number]` to prevent element mutation.
4. **Destructuring**: Safely extracting tuple elements into variables with correct inferred types.

---

## Quick-Reference Code Examples
```typescript
const userRecord: [id: number, username: string] = [1, "alice"];
const [id, username] = userRecord;
```

---

## Common Mistakes
- Swapping element order (e.g., passing `[42, "hello"]` to a `[string, number]` tuple).

---

## Practice Exercises
1. Define a tuple representing an HTTP response containing a status code (`number`) and a response message (`string`).
2. Create a readonly coordinate tuple `[number, number]`.

---

## Next Topic
Proceed to [Module 12: Parameter and Return Type Annotations](../12-param-annotation/README.md).
