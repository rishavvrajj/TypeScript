# Module 13: Optional and Default Parameters

## Learning Objective
Master optional parameters (`?`), default parameter values (`=`), and handling optional object properties with nullish coalescing (`??`).

## Target Audience
Developers building flexible, user-friendly APIs and component configurations.

## Prerequisites
- Completion of [Module 12: Parameter and Return Type Annotations](../12-param-annotation/README.md).

---

## Explanation in Simple Language
Not all function arguments are required every time. TypeScript lets you mark parameters or object properties as **optional** using `?` or provide **default fallback values** using `=`. This makes your functions versatile while maintaining strict type safety.

---

## Key Concepts & Rules
1. **Optional Parameters (`?`)**: Can be provided or omitted (`name?: string`). Omitted parameters evaluate to `undefined`.
2. **Default Parameters (`=`)**: Automatically assigns a fallback value if the argument is omitted or `undefined`.
3. **Nullish Coalescing (`??`)**: Safely provides fallback values when dealing with `null` or `undefined`.

---

## Quick-Reference Code Examples
```typescript
function connect(host: string, port: number = 3000): string {
    return `Connecting to ${host}:${port}`;
}
```

---

## Common Mistakes
- Placing required parameters after optional parameters (TypeScript requires optional parameters to come last).

---

## Practice Exercises
1. Write a greeting function with an optional title parameter.
2. Create an object type for database configuration with optional timeout and port fields, and use `??` to set defaults.

---

## Next Topic
Proceed to [Module 14: Rest Parameters and Tuples](../14-rest-tuple/README.md).
