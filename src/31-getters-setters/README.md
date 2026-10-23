# Module 31: Class Getters and Setters (Accessors)

## Learning Objective
Master TypeScript class getters (`get`) and setters (`set`) for data encapsulation, computed properties, runtime validation, and read-only accessors.

## Target Audience
Developers building domain models, form state managers, and data structures requiring validated or computed fields in TypeScript.

## Prerequisites
- Completion of [Module 30: Class Access Modifiers](../30-access-modifiers/README.md).

---

## Explanation in Simple Language
Getters and setters intercept reads and writes to an object's properties:
- **`get propertyName(): Type`**: Intercepts property reads, enabling **computed properties** that are calculated on demand.
- **`set propertyName(val: Type)`**: Intercepts property assignments, allowing you to run **validation** or transform input values before storing them.
- **Getter without a Setter**: Automatically makes the property **read-only** in TypeScript!

---

## Key Concepts & Rules
1. **Computed Properties**: Derive values on the fly without duplicating state (e.g., computing Fahrenheit from Celsius).
2. **Encapsulated State**: Keep internal backing storage private (`#field` or `private _field`), exposing safe accessors.
3. **Type Consistency**: TypeScript ensures that the setter parameter type matches the getter return type.

---

## Quick-Reference Code Examples
```typescript
class Circle {
    constructor(private _radius: number) {}

    get radius(): number {
        return this._radius;
    }

    set radius(val: number) {
        if (val <= 0) throw new Error("Radius must be positive");
        this._radius = val;
    }

    get area(): number {
        return Math.PI * this._radius ** 2; // Read-only computed property
    }
}
```

---

## Common Mistakes
- Calling a getter like a method (e.g., `obj.radius()` instead of `obj.radius`).
- Recursively calling the setter inside itself (e.g., `set val(v) { this.val = v; }`), causing a stack overflow. Always store in a backing field like `#c` or `_c`.

---

## Practice Exercises
1. Create a `User` class with `firstName` and `lastName`, and a getter/setter for `fullName`.
2. Implement a `BankAccount` class where a getter formats the balance as currency (e.g., `"$100.00"`).
