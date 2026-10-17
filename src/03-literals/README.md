# Module 03: Literal Types

## Learning Objective
Master literal types and string/numeric literal unions to restrict variables and function parameters to exact, specific values.

## Target Audience
Beginners learning TypeScript.

## Prerequisites
- Completion of [Module 02: Type Inference](../02-type-inference/README.md).

---

## Explanation in Simple Language
A **literal** is a more concrete subtype of a collective type. Instead of saying a variable can be *any* string, a literal type says it can only be **one specific string** (like `"up"`). When combined with union operators (`|`), literal types become a powerful tool for creating strict states, configurations, and options.

---

## Key Concepts & Rules
1. **String Literals**: `type Status = "pending" | "approved" | "rejected";`
2. **Numeric Literals**: `type Dice = 1 | 2 | 3 | 4 | 5 | 6;`
3. **Discriminated Unions**: Combining literal property tags with object types for bulletproof state management.

---

## Quick-Reference Code Examples
```typescript
type Direction = "left" | "right" | "up" | "down";

function move(d: Direction) {
    console.log(d);
}

move("left"); // Valid
// move("backward"); // Error!
```

---

## Common Mistakes
- **Mutating `let` variables**: Assigning a literal to a `let` variable can widen its type to `string` unless annotated or marked with `as const`.

---

## Practice Exercises
1. Define a literal union type for HTTP methods (`"GET" | "POST" | "PUT" | "DELETE"`).
2. Write a function that accepts this HTTP method type and logs a mock request message.

---

## Next Topic
Proceed to [Module 04: Objects](../04-objects/README.md).
