# Module 26: Function and Constructor Utility Types

## What the Topic Is
Inspecting and deriving types from functions and classes using `ReturnType<T>`, `Parameters<T>`, `InstanceType<T>`, and `ConstructorParameters<T>`.

## Why It Matters
These utility types allow you to extract parameter tuples and return types from existing functions or classes without duplicating type definitions.

## Complete Code Example
```typescript
// TypeScript Learning Example: Function and Constructor Utility Types
// This file demonstrates how to use ReturnType<T>, Parameters<T>, InstanceType<T>,
// and ConstructorParameters<T> to inspect and derive types from functions and classes.

export {};

// 1. Function Utility Types: `ReturnType<T>` and `Parameters<T>`
// These utilities let you extract the return type and parameter tuple type of any function.
function extractUserInfo(id: string, isExtraInfo = false) {
    return {
        id,
        name: 'Sangam Mukherjee',
        log: isExtraInfo ? "Detailed audit logs enabled" : (undefined as string | undefined),
    };
}

// Derive return type and parameters type from the function using `typeof`
type GetUserReturnInfo = ReturnType<typeof extractUserInfo>;
type GetUserParamsInfo = Parameters<typeof extractUserInfo>; // [string, boolean?]

const argsInfo: GetUserParamsInfo = ["u_999", true];
const resultInfo: GetUserReturnInfo = extractUserInfo(...argsInfo);

console.log(`User Info Result - Name: ${resultInfo.name}, Log: ${resultInfo.log}`);

// 2. Constructor Utility Types: `InstanceType<T>` and `ConstructorParameters<T>`
// These utilities let you inspect class constructors to extract the instance type and constructor arguments.
class Person {
    constructor(public name: string, public age: number) {}

    greet(): string {
        return `Hi, I am ${this.name} and I am ${this.age} years old.`;
    }
}

// Extract instance type (type of objects created by `new Person(...)`)
type PersonInstance = InstanceType<typeof Person>;

// Extract constructor parameter types as a tuple
type PersonCtorArgs = ConstructorParameters<typeof Person>; // [string, number]

const ctorArgs: PersonCtorArgs = ["Rishav", 26];
const personInstance: PersonInstance = new Person(...ctorArgs);

console.log(personInstance.greet());
```

## How the Code Works Line by Line
1. **`ReturnType<typeof fn>`**: Extracts the return type of a function.
2. **`Parameters<typeof fn>`**: Extracts parameter types as a tuple.
3. **`InstanceType<typeof Class>`**: Extracts class instance type.
4. **`ConstructorParameters<typeof Class>`**: Extracts constructor argument tuple.

## Expected Output
```text
User Info Result - Name: Sangam Mukherjee, Log: Detailed audit logs enabled
Hi, I am Rishav and I am 26 years old.
```

## Common Mistakes & Anti-Patterns
- Forgetting `typeof` when passing functions or classes to utility types (`ReturnType<fn>` vs `ReturnType<typeof fn>`).
