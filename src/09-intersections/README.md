# Module 09: Intersection Types

## Learning Objective
Master intersection types (`&`) to combine multiple types into a single composite type that satisfies all component requirements.

## Target Audience
Developers building composable data structures and modular types in TypeScript.

## Prerequisites
- Completion of [Module 08: Union Types](../08-unions/README.md).

---

## Explanation in Simple Language
An **Intersection Type** (`A & B`) creates a new type by combining multiple existing types. Think of it as an "AND" relationship. An object of an intersection type must possess **all** properties and capabilities defined by every constituent type.

---

## Key Concepts & Rules
1. **Combining Object Shapes**: `type Employee = Person & JobDetails;`
2. **Composing Behaviors / Interfaces**: Combining function capability types (`CanRead & CanWrite`).
3. **Intersection vs Union**: Union (`|`) means *either* A or B; Intersection (`&`) means *both* A and B simultaneously.

---

## Quick-Reference Code Examples
```typescript
type HasId = { id: number };
type HasTimestamp = { createdAt: Date };

type Entity = HasId & HasTimestamp;

const entity: Entity = {
    id: 1,
    createdAt: new Date()
};
```

---

## Common Mistakes
- Intersecting primitive types with incompatible constraints (e.g., `string & number`), which collapses into `never` because no value can be both a string and a number.

---

## Practice Exercises
1. Create two types: `Contact` (email, phone) and `Address` (street, city).
2. Intersect them into a `UserProfile` type and instantiate an object.

---

## Next Topic
Proceed to [Module 10: Arrays](../10-array/README.md).
