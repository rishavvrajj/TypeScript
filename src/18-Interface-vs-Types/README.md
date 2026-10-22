# Module 18: Interfaces vs. Type Aliases

## Learning Objective
Understand the key differences, use cases, and trade-offs between TypeScript `interface` and `type` (type alias) so you can choose the right tool for any architectural pattern.

## Target Audience
TypeScript developers looking to establish consistent modeling conventions across large codebases.

## Prerequisites
- Completion of [Module 16: Interfaces](../16-interfaces/README.md) and [Module 17: Type Aliases](../17-type-aliases/README.md).

---

## Explanation in Simple Language
In TypeScript, `interface` and `type` both define object shapes, but they have distinct capabilities:
- **Interfaces** are designed for object-oriented design: they support **declaration merging** (auto-merging multiple definitions with the same name) and clean inheritance (`extends`).
- **Type Aliases** are more general: they can represent primitives, unions (`A | B`), intersections (`A & B`), tuples, and function types, but cannot be reopened or merged.

---

## Key Concepts & Rules
1. **Declaration Merging**: `interface User { id: string }` + `interface User { name: string }` results in `{ id: string; name: string }`. Type aliases throw duplicate identifier errors if redeclared.
2. **Extending vs Intersecting**: Interfaces use `interface Admin extends User { role: string }`. Type aliases use intersection `type Admin = User & { role: string }`.
3. **Primitives & Unions**: Only `type` can alias primitives (`type ID = string;`) or union types (`type Role = 'admin' | 'user';`).

---

## Quick-Reference Code Examples
```typescript
// Interface (Supports Merging & extends)
interface WindowSize {
    width: number;
}
interface WindowSize {
    height: number;
}

// Type Alias (Supports Unions & Primitives)
type Result<T> = Success<T> | Failure;
type ID = string | number;
```

---

## Common Mistakes
- Using type aliases when declaration merging is required (e.g., augmenting global types or third-party library interfaces).
- Trying to alias a union or primitive with an `interface` keyword.

---

## Practice Exercises
1. Define an interface and demonstrate declaration merging by adding properties across two blocks.
2. Define a union type alias that cannot be expressed directly as an interface.

---

## Course Conclusion
Mastering when to use `interface` vs `type` brings clarity and robustness to your TypeScript type definitions!
