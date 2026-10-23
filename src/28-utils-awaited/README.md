# Module 28: Async Promise Unwrapping (`Awaited<T>`)

## What the Topic Is
Unrapping promises, nested promises, thenables, and async function return types using the built-in `Awaited<T>` utility type.

## Why It Matters
When consuming data from asynchronous functions or `Promise.all`, `Awaited<T>` extracts the underlying resolved data type automatically.

## Complete Code Example
```typescript
// TypeScript Learning Example: The `Awaited<T>` Utility Type
// This file demonstrates how to unwrap promises, nested promises, thenables, and async function return types
// using the built-in `Awaited<T>` utility type.

export {};

// 1. Basic Promise Unwrapping
// `Awaited<T>` extracts the underlying resolved value from a Promise.
type PromiseNumber = Awaited<Promise<number>>; // number
type NestedPromiseString = Awaited<Promise<Promise<string>>>; // string

// Non-promise types passed to `Awaited` remain unchanged
type PlainString = Awaited<string>; // string

// 2. Unwrapping Union of Promises
type PromiseUnion = Awaited<Promise<string> | Promise<number>>; // string | number

// 3. Typing Async Function Results (`Awaited<ReturnType<typeof fn>>`)
// This is one of the most powerful patterns in modern TypeScript: extracting the resolved data type of an API call or async function.
async function fetchCount() {
    return 42 as const;
}

type ResolvedFetchCountValue = Awaited<ReturnType<typeof fetchCount>>; // 42

async function fetchUserProfile() {
    return {
        id: "usr_007",
        name: "James Bond",
        roles: ["Agent", "Admin"] as const,
    };
}

type UserProfileData = Awaited<ReturnType<typeof fetchUserProfile>>;

const profile: UserProfileData = {
    id: "usr_007",
    name: "James Bond",
    roles: ["Agent", "Admin"],
};

console.log(`Fetched User Profile: ${profile.name} (${profile.id})`);

// 4. Unwrapping `Promise.all` Results
// When working with concurrent promises in `Promise.all`, `Awaited` correctly extracts the tuple of resolved values.
async function getDashboardData() {
    return Promise.all([
        Promise.resolve(100 as const),
        Promise.resolve("Active Status" as const),
    ] as const);
}

type DashboardTuple = Awaited<ReturnType<typeof getDashboardData>>; // readonly [100, "Active Status"]

async function runDemo() {
    const data: DashboardTuple = await getDashboardData();
    console.log(`Dashboard Stats - Count: ${data[0]}, Status: ${data[1]}`);
}

runDemo();
```

## How the Code Works Line by Line
1. **`Awaited<Promise<T>>`**: Recursively unwraps promise wrappers to get `T`.
2. **`Awaited<ReturnType<typeof fn>>`**: Extracts resolved data types from async functions.
3. **`Promise.all` Unwrapping**: Extracts tuples of resolved values.

## Expected Output
```text
Fetched User Profile: James Bond (usr_007)
Dashboard Stats - Count: 100, Status: Active Status
```

## Common Mistakes & Anti-Patterns
- Manually duplicating object shapes returned by async functions instead of using `Awaited<ReturnType<typeof fn>>`.
