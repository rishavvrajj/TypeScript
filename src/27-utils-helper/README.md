# Module 27: Conditional and Filtering Utility Types

## Learning Objective
Master advanced conditional and filtering utility types (`Exclude<T, U>`, `Extract<T, U>`, and `NonNullable<T>`) to precisely filter, refine, and shape union types.

## Target Audience
Developers designing sophisticated type systems, event-driven architectures, or strict null-safety wrappers in TypeScript.

## Prerequisites
- Completion of [Module 26: Function and Constructor Utility Types](../26-function-utils/README.md).

---

## Explanation in Simple Language
When working with union types, you often need to subtract certain types or pick only matching types:
- **`Exclude<T, U>`**: Takes a union `T` and removes any types that are assignable to `U`. ("Exclude these types")
- **`Extract<T, U>`**: Takes a union `T` and keeps only the types that are assignable to `U`. ("Extract only these types")
- **`NonNullable<T>`**: Strips away `null` and `undefined` from a union type.

---

## Key Concepts & Rules
1. **Union Filtering**: Operates on union types distributively.
2. **Event & Action Reductions**: Excellent for filtering specific UI events or API action strings.

---

## Quick-Reference Code Examples
```typescript
type AllEvents = "click" | "scroll" | "keydown" | "keyup";
type MouseEvents = Extract<AllEvents, "click" | "scroll">; // "click" | "scroll"
type NonKeyboardEvents = Exclude<AllEvents, "keydown" | "keyup">; // "click" | "scroll"
```

---

## Common Mistakes
- Confusing `Exclude` (subtracting types) with `Extract` (keeping intersecting types).

---

## Practice Exercises
1. Given a union of status strings `"pending" | "approved" | "rejected" | "archived"`, use `Exclude` to remove `"archived"`.
2. Use `NonNullable` to clean a union type that includes `string | null | undefined`.
