# Module 17: Type Aliases

## Learning Objective
Master TypeScript type aliases (`type`) for giving descriptive names to any TypeScript type, including object shapes, union types, primitives, and intersection types.

## Target Audience
Developers building flexible, well-typed data models and utility types in TypeScript.

## Prerequisites
- Completion of [Module 16: Interfaces](../16-interfaces/README.md).

---

## Explanation in Simple Language
A **Type Alias** is a way to give a name to a type (`type MyName = string;` or `type User = { id: string; name: string; }`). Unlike interfaces, type aliases can represent primitives, union types, tuples, and any complex type combination using intersections (`&`).

---

## Key Concepts & Rules
1. **Basic Type Aliases**: `type ID = string | number;`
2. **Object Shapes**: `type User = { id: string; name: string; }`
3. **Union Types**: `type Status = "pending" | "approved" | "rejected";`
4. **Intersections (`&`)**: Combining multiple types into one `type AdminUser = User & Permissions;`

---

## Quick-Reference Code Examples
```typescript
type Point = {
    x: number;
    y: number;
};

type Printable = {
    print(): void;
};

type PrintablePoint = Point & Printable;
```

---

## Common Mistakes
- Expecting type aliases to support declaration merging or `extends` clauses like interfaces. (Use intersections `&` or unions instead).

---

## Practice Exercises
1. Create a type alias for a product with ID, name, price, and category.
2. Define a union type alias for user roles (`"admin" | "editor" | "viewer"`).

---

## Course Conclusion
You have successfully explored type aliases in TypeScript!
