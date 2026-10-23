# Module 25: Built-in Utility Types

## Learning Objective
Master TypeScript's powerful built-in utility types (`Partial<T>`, `Required<T>`, `Readonly<T>`, `Pick<T, K>`, `Omit<T, K>`, and `Record<K, T>`) for transforming and manipulating object types without duplication.

## Target Audience
Developers building robust TypeScript applications who want to avoid redundant type definitions and leverage TypeScript's type transformations.

## Prerequisites
- Completion of [Module 24: Generic Property Accessors](../24-generics-getProps/README.md).

---

## Explanation in Simple Language
TypeScript provides built-in generic utility types that act as "type functions" to take existing types and transform them in common ways:
- **`Partial<T>`**: Turns all properties of `T` into optional (`?`).
- **`Required<T>`**: Turns all optional properties of `T` into required.
- **`Readonly<T>`**: Prevents mutation by making all properties read-only.
- **`Pick<T, K>`**: Keeps only the specified keys `K` from `T`.
- **`Omit<T, K>`**: Removes the specified keys `K` from `T`.
- **`Record<K, T>`**: Creates a dictionary/lookup map where keys are of type `K` and values are of type `T`.

---

## Key Concepts & Rules
1. **`Partial<T>`**: Essential for patch/update payloads.
2. **`Pick<T, K>` vs `Omit<T, K>`**: `Pick` includes only listed keys; `Omit` excludes listed keys.
3. **`Record<K, T>`**: Perfect for lookup tables, dictionaries, or state maps.

---

## Quick-Reference Code Examples
```typescript
type User = { id: string; name: string; email?: string };

type UserPreview = Pick<User, "id" | "name">;
type CreateUserPayload = Omit<User, "id">;
type UserRolesRecord = Record<string, "Admin" | "User">;
```

---

## Common Mistakes
- Trying to modify properties on a `Readonly<T>` type object.
- Forgetting that `Partial<T>` makes every property optional, requiring undefined/optional checks when reading them.

---

## Practice Exercises
1. Given a `Product` type, use `Omit` to create a `NewProduct` type that excludes an `id` field.
2. Use `Record` to create a dictionary mapping category names (`"tech" | "clothing" | "food"`) to array of product IDs.
