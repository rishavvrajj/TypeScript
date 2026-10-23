# Module 09: Intersection Types

## What the Topic Is
Intersection types (`&`) combine multiple types into a single compound type. An object of an intersection type must satisfy **all** constituent types simultaneously.

## Why It Matters
Intersection types promote modular, composable code by letting you combine small, single-purpose object shapes into rich, combined domain models.

## Complete Code Example
```typescript
// TypeScript Learning Example: Intersection Types
// Intersection types combine multiple types into one using the `&` operator.
// The resulting type must satisfy ALL combined types simultaneously.

export {};

// 1. Basic Intersection: Merging Two Simple Object Types
type HasId = { id: number };
type HasTimestamp = { createdAt: Date };

// Entity MUST have both `id` and `createdAt`
type Entity = HasId & HasTimestamp;

const entity: Entity = { id: 1, createdAt: new Date() };
console.log(`Entity ID: ${entity.id}, Created: ${entity.createdAt.toISOString()}`);

// 2. Practical Example: Building a Rich Type from Composable Pieces
type Product = {
    id: string;
    title: string;
};

type Priced = {
    price: number;
};

type Discountable = {
    discount?: number; // optional discount percentage
};

// PricedProduct combines ALL three shapes — id, title, price, and optional discount.
type PricedProduct = Product & Priced & Discountable;

const laptop: PricedProduct = {
    id: "prod-001",
    title: "Laptop Pro",
    price: 1299.99,
    discount: 10
};

const headphones: PricedProduct = {
    id: "prod-002",
    title: "Noise-Cancelling Headphones",
    price: 249.99
    // discount is optional, so it can be omitted
};

function describeProduct(p: PricedProduct): void {
    const finalPrice = p.discount
        ? p.price * (1 - p.discount / 100)
        : p.price;
    console.log(`${p.title}: $${finalPrice.toFixed(2)}`);
}

describeProduct(laptop);
describeProduct(headphones);

// 3. Intersection with Roles: Composing Permissions from Separate Concerns
type CanRead  = { read:  () => void };
type CanWrite = { write: () => void };
type CanAdmin = { deleteUser: () => void };

// A SuperAdmin must be able to do all three.
type SuperAdmin = CanRead & CanWrite & CanAdmin;

const superAdmin: SuperAdmin = {
    read:       () => console.log("Reading data..."),
    write:      () => console.log("Writing data..."),
    deleteUser: () => console.log("Deleting user...")
};

superAdmin.read();
superAdmin.write();
superAdmin.deleteUser();

// 4. Intersection vs Union — the key difference
// Union (|): the value can be ONE of the types  → A OR B
// Intersection (&): the value must be ALL types  → A AND B
```

## How the Code Works Line by Line
1. **Basic Intersection**: `Entity = HasId & HasTimestamp` combines `id` and `createdAt`.
2. **Composable Product Models**: Combines `Product`, `Priced`, and `Discountable` into `PricedProduct`.
3. **Behavioral Intersection**: Combines `CanRead`, `CanWrite`, and `CanAdmin` methods into `SuperAdmin`.
4. **Union vs Intersection**: Contrasts `A | B` (either) with `A & B` (both).

## Expected Output
```text
Entity ID: 1, Created: [ISO Date String]
Laptop Pro: $1169.99
Noise-Cancelling Headphones: $249.99
Reading data...
Writing data...
Deleting user...
```

## Common Mistakes & Anti-Patterns
- Confusing intersection (`&`) with union (`|`). Intersecting disjoint primitive types (e.g., `string & number`) results in `never`.
