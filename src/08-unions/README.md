# Module 08: Union Types

## What the Topic Is
Union types (`|`) allow a value to be one of several possible types (e.g., `string | number`), enabling flexible yet type-safe data handling and narrowing.

## Why It Matters
Real-world data is often polymorphic. Union types allow functions and data structures to accept multiple input formats while ensuring TypeScript enforces correct control-flow checks.

## Complete Code Example
```typescript
function printId(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        id.toFixed(2)
    }
}

type Admin = {
    role: "Admin",
    permission: string[]
}

type Customer = {
    role: "Customer",
    loyaltyPoints: number
}

function UserType(u: Admin | Customer) {
    if ('permission' in u) {
        console.log(u.role);
    } else {
        console.log(u.loyaltyPoints);
    }
}

// array of union 
const arryUnion: (string | number)[] = ["a", 1, "b", 3, 4, 5, "e", "g"]

// union of array

const unionOfArrys: string[] | number[] = Math.random() > 0.5 ? ["X", "Y"] : [1, 2]

// unionOfArrys.push("Z")
```

## How the Code Works Line by Line
1. **Primitive Union**: `printId(id: number | string)` handles both numbers and strings using `typeof` narrowing.
2. **Object Union**: `UserType(u: Admin | Customer)` distinguishes between objects using the `'in'` operator.
3. **Array of Unions**: `(string | number)[]` permits arrays containing both strings and numbers.
4. **Union of Arrays**: `string[] | number[]` represents an array that is either entirely strings or entirely numbers.

## Expected Output
*(Script executes type checks and helper functions)*

## Common Mistakes & Anti-Patterns
- Attempting to call methods specific to one union member without first narrowing the type (`typeof` or `'in'`).
- Confusing `(string | number)[]` (array containing mixed types) with `string[] | number[]` (array of either all strings or all numbers).
