# Module 20: Typeof Type Operator

## Learning Objective
Master the TypeScript `typeof` type operator for querying the type of an existing value and deriving types from runtime objects or constants.

## Target Audience
Developers building type-safe configurations, constants, and data-driven typing in TypeScript.

## Prerequisites
- Completion of [Module 17: Type Aliases](../17-type-aliases/README.md) and [Module 18: Interfaces vs. Type Aliases](../18-Interface-vs-Types/README.md).

---

## Explanation in Simple Language
In JavaScript, `typeof x` returns a string at runtime (like `"string"` or `"object"`). In TypeScript, when used in a **type position**, `typeof` inspects a JavaScript value and produces its exact TypeScript type. This allows you to "write the type once" based on a runtime constant or object.

---

## Key Concepts & Rules
1. **Type Query (`typeof value`)**: `const settings = { theme: 'dark', retries: 3 }; type AppSettings = typeof settings;`
2. **Combining with `keyof`**: `type SettingKey = keyof typeof settings;` (`'theme' | 'retries'`)
3. **Runtime vs Type Context**: TypeScript's `typeof` is erased at compile time and used purely for type checking.

---

## Quick-Reference Code Examples
```typescript
const DEFAULT_CONFIG = {
    endpoint: "https://api.example.com",
    timeout: 3000
};

type ConfigType = typeof DEFAULT_CONFIG;
// Equivalent to: { endpoint: string; timeout: number; }
```

---

## Common Mistakes
- Confusing JavaScript's runtime `typeof` operator with TypeScript's type-level `typeof` operator.

---

## Practice Exercises
1. Define a configuration object and use `typeof` to create a corresponding type alias.
2. Combine `typeof` with `keyof` to create a union type of valid property names.

---

## Course Conclusion
You now understand how to leverage the `typeof` operator to bridge runtime constants and compile-time types!
