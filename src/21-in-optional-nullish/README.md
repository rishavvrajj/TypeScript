# Module 21: `in` Operator, Optional Chaining, and Nullish Coalescing

## What the Topic Is
Narrowing union types using the `in` operator, safe property access with optional chaining (`?.`), and handling nullish values with `??` and `??=`.

## Why It Matters
These operators allow you to deal cleanly with missing properties, optional nested fields, and fallback values without repetitive `if` checks.

## Complete Code Example
```typescript
// TypeScript Learning Example: The `in` Operator, Optional Chaining, and Nullish Coalescing
// This file demonstrates how to narrow union types using the `in` operator and how to handle nullish values safely with `?.`, `??`, and `??=`.

export {};

// 1. The `in` Operator for Type Narrowing
// When working with union types of objects, checking `'property' in object` allows TypeScript
// to narrow down the exact type based on property existence.
type AdminUser = {
    role: "Admin";
    permissions: string[];
};

type RegularUser = {
    role: "User";
    expiresAt: Date;
};

type UserExample = AdminUser | RegularUser;

function describeUserExample(u: UserExample): string {
    if ('permissions' in u) {
        // TypeScript knows `u` is `AdminUser` here
        return `Admin with permissions: ${u.permissions.join(", ")}`;
    }
    // TypeScript knows `u` is `RegularUser` here
    return `User expires at: ${u.expiresAt.toISOString()}`;
}

console.log(describeUserExample({ role: 'User', expiresAt: new Date() }));
console.log(describeUserExample({ role: 'Admin', permissions: ['read', 'write'] }));

// 2. Optional Chaining (`?.`)
// Optional chaining lets you safely access properties, methods, or array elements deeply nested
// within objects without throwing a TypeError if an intermediate reference is `null` or `undefined`.
type UserProfile = {
    name: string;
    address?: {
        street: string;
        city: string;
        geo?: {
            lat: number;
            lng: number;
        };
    };
    getGreeting?: () => string;
};

const user1: UserProfile = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Seattle"
    }
};

const user2: UserProfile = {
    name: "Bob"
};

// Safe property access
const city1 = user1.address?.city; // "Seattle"
const city2 = user2.address?.city; // undefined (does not throw)
const lat = user2.address?.geo?.lat; // undefined

// Safe method invocation
const greeting = user1.getGreeting?.(); // undefined (does not throw)

console.log(`User 1 City: ${city1}, User 2 City: ${city2 ?? "Unknown"}`);

// 3. Nullish Coalescing Operator (`??`)
// The `??` operator returns the right-hand side operand when the left-hand side is `null` or `undefined`.
// Unlike the logical OR (`||`) operator, `??` does NOT treat `0`, `""`, or `false` as falsy values.
const count1: number = 0;
const defaultCount1 = count1 || 10; // 10 (because 0 is falsy in JS)
const defaultCount2 = count1 ?? 10; // 0  (because 0 is neither null nor undefined)

console.log(`Logical OR result (0 || 10): ${defaultCount1}`);
console.log(`Nullish coalescing result (0 ?? 10): ${defaultCount2}`);

// 4. Comparing Nullish Coalescing Assignment (`??=`) with Logical OR Assignment (`||=`)
// `??=` assigns only if `null` or `undefined`. `||=` assigns if falsy (`0`, `false`, `""`, `null`, `undefined`).
let apiTimeout: number | undefined = undefined;
apiTimeout ??= 5000; // Assigns 5000 because apiTimeout is undefined

let retryCount: number | null = 0;
retryCount ??= 3; // Does NOT assign 3 because retryCount is 0 (not null or undefined)

console.log(`API Timeout: ${apiTimeout}, Retry Count: ${retryCount}`);

let itemsCount: number | null = 0;
itemsCount ||= 10; // Assigns 10 because 0 is falsy for ||=

console.log(`Items Count (||=): ${itemsCount}`);
```

## How the Code Works Line by Line
1. **`in` Operator**: `'permissions' in u` narrows object unions.
2. **Optional Chaining (`?.`)**: Safely inspects nested properties without throwing errors.
3. **Nullish Coalescing (`??`)**: Fallback operator for `null`/`undefined`, preserving `0` or `false`.
4. **Assignment Operators (`??=` vs `||=`)**: Compares nullish assignment with logical OR assignment.

## Expected Output
```text
User expires at: [ISO Date]
Admin with permissions: read, write
User 1 City: Seattle, User 2 City: Unknown
Logical OR result (0 || 10): 10
Nullish coalescing result (0 ?? 10): 0
API Timeout: 5000, Retry Count: 0
Items Count (||=): 10
```

## Common Mistakes & Anti-Patterns
- Using `||` instead of `??` when dealing with numeric counts or boolean flags where `0` or `false` are valid configured values.
