# Module 04: Objects and Shapes

## Learning Objective
Learn how to type objects, define optional properties, enforce readonly fields, use index signatures, and leverage utility types like `Record`.

## Target Audience
Beginners moving into structured data and object-oriented TypeScript.

## Prerequisites
- Completion of [Module 03: Literals](../03-literals/README.md).

---

## Explanation in Simple Language
Objects hold collections of key-value pairs. In TypeScript, we define the "shape" of an object using `type` aliases. This ensures that every object in your application has the correct properties with the correct data types.

---

## Key Concepts & Rules
1. **Required Properties**: `id: string`
2. **Optional Properties (`?`)**: `email?: string` (can be string or omitted entirely)
3. **Readonly Properties (`readonly`)**: Prevents modification after creation (`readonly createdAt: Date`)
4. **Index Signatures**: `[key: string]: number` for dynamic keys.
5. **Record Utility Type**: `Record<K, T>` for precise key-value mapping.

---

## Quick-Reference Code Examples
```typescript
type User = {
    id: string;
    name: string;
    email?: string;
    readonly createdAt: Date;
};
```

---

## Common Mistakes
- Confusing optional properties (`email?: string`) with explicit union (`email: string | undefined` which requires the key to be present).

---

## Practice Exercises
1. Create a `Product` type with `id` (string), `title` (string), `price` (number), and an optional `discount` (number).
2. Create an object conforming to this type.

---

## Next Topic
Proceed to [Module 05: Type Assertions](../05-type-assertions/README.md).
