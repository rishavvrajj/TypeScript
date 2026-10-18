# Module 08: Union Types

## Learning Objective
Understand how to combine multiple types into a union (`|`), allowing a variable or parameter to accept one of several types safely, and how to narrow union types using type guards.

## Target Audience
Developers learning advanced typing and type narrowing in TypeScript.

## Prerequisites
- Completion of [Module 07: Special Types](../07-special-types/README.md).

---

## Explanation in Simple Language
A **Union Type** (`A | B`) represents a value that can be **one of several** types. Think of it as an "OR" relationship. When working with a union type, TypeScript only allows you to access properties and methods that are common to **all** constituents unless you perform **type narrowing** (using `typeof`, `instanceof`, or `'in'`).

---

## Key Concepts & Rules
1. **Primitive Unions**: `string | number`
2. **Literal Unions**: `"admin" | "customer" | "guest"`
3. **Type Narrowing**: Using `typeof`, `in`, or custom type guards to safely handle specific union branches.
4. **Union of Arrays vs Array of Unions**: `(string | number)[]` vs `string[] | number[]`.

---

## Quick-Reference Code Examples
```typescript
function printId(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}
```

---

## Common Mistakes
- Accessing methods specific to one branch of a union without narrowing first (causes a compile error).

---

## Practice Exercises
1. Create a function that accepts a parameter of type `boolean | string` and returns its string representation in uppercase or "YES"/"NO".
2. Define a union type for shapes (`Circle | Square`) and write a function to handle them using property checks.

---

## Next Topic
Proceed to [Module 09: Intersection Types](../09-intersection/README.md).
