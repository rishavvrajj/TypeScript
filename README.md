# TypeScript Essentials: From Scratch to Advanced

Welcome to the **TypeScript Essentials** course repository! This codebase is structured as a clear, progressive, book-like reference course designed to take you from absolute basics to confident, type-safe TypeScript development.

---

## Course Overview & Learning Path

The course is divided into **31 comprehensive modules**, organized by topic across 5 logical parts in the `src/` directory. Each module contains an in-depth explanatory `README.md` and a runnable, well-commented TypeScript code example.

### Part 1: Foundations & Primitives (Modules 01–07)
| Module | Folder | Topic | Description |
| :---: | :--- | :--- | :--- |
| **01** | [`src/01-primitives`](src/01-primitives) | Primitives | `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined` |
| **02** | [`src/02-type-inference`](src/02-type-inference) | Type Inference | How TypeScript infers types and when to use explicit annotations |
| **03** | [`src/03-literals`](src/03-literals) | Literal Types | Restricting values to exact literals and string literal unions |
| **04** | [`src/04-objects`](src/04-objects) | Objects & Shapes | Typing object structures, optional properties, readonly, and `Record` |
| **05** | [`src/05-type-assertions`](src/05-type-assertions) | Type Assertions | Using `as`, non-null assertions `!`, and runtime type guards |
| **06** | [`src/06-as-const`](src/06-as-const) | Const Assertions | Deep freezing with `as const` and deriving union types from arrays/objects |
| **07** | [`src/07-special-types`](src/07-special-types) | Special Types | Top and bottom types: `any`, `unknown`, `void`, `never` |

### Part 2: Complex Types, Functions & Interfaces (Modules 08–16)
| Module | Folder | Topic | Description |
| :---: | :--- | :--- | :--- |
| **08** | [`src/08-unions`](src/08-unions) | Union Types | Combining types with `|` and narrowing with type guards |
| **09** | [`src/09-intersections`](src/09-intersections) | Intersection Types | Combining types with `&` and composing object shapes |
| **10** | [`src/10-arrays`](src/10-arrays) | Arrays | Typed arrays, union arrays, and readonly arrays |
| **11** | [`src/11-tuples`](src/11-tuples) | Tuples | Fixed-length typed arrays and labeled tuple elements |
| **12** | [`src/12-parameters`](src/12-parameters) | Parameter Annotations | Explicit function parameter and return type annotations |
| **13** | [`src/13-optional-defaults`](src/13-optional-defaults) | Optional & Default | Optional parameters (`?`), defaults (`=`), and nullish coalescing |
| **14** | [`src/14-rest-parameters`](src/14-rest-parameters) | Rest Parameters & Tuples | Variadic rest parameters and tuple spreading |
| **15** | [`src/15-return-types`](src/15-return-types) | Return Types | Inferred and explicit function return types across code paths |
| **16** | [`src/16-interfaces`](src/16-interfaces) | Interfaces | Object shapes, extending interfaces, declaration merging, and classes |

### Part 3: Advanced Types, Type Aliases & Narrowing (Modules 17–24)
| Module | Folder | Topic | Description |
| :---: | :--- | :--- | :--- |
| **17** | [`src/17-type-aliases`](src/17-type-aliases) | Type Aliases | Naming complex types, unions, primitives, and intersection types |
| **18** | [`src/18-interface-vs-types`](src/18-interface-vs-types) | Interfaces vs. Type Aliases | Comparing capabilities, extensibility, and best practices |
| **19** | [`src/19-index-signature`](src/19-index-signature) | Index Signatures | Dynamic key-value mappings and index signature types |
| **20** | [`src/20-typeof`](src/20-typeof) | Typeof Operator | Runtime `typeof` narrowing vs. type-level `typeof` operator |
| **21** | [`src/21-in-optional-nullish`](src/21-in-optional-nullish) | In Operator & Nullish | Property presence check (`in`), optional chaining (`?.`), and nullish coalescing (`??`/`??=`) |
| **22** | [`src/22-generics`](src/22-generics) | Generics Basics | Reusable components with type parameters (`<T>`) |
| **23** | [`src/23-generic-constraints`](src/23-generic-constraints) | Generic Constraints | Restricting type parameters using `extends` |
| **24** | [`src/24-generics-get-props`](src/24-generics-get-props) | Keyof & Indexed Access | `keyof` operator and indexed access types (`T[K]`) |

### Part 4: Utility Types & Async (Modules 25–28)
| Module | Folder | Topic | Description |
| :---: | :--- | :--- | :--- |
| **25** | [`src/25-utils`](src/25-utils) | Built-in Object Utilities | `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record` |
| **26** | [`src/26-function-utils`](src/26-function-utils) | Function & Constructor Utilities | `ReturnType`, `Parameters`, `ConstructorParameters`, `InstanceType` |
| **27** | [`src/27-utils-helper`](src/27-utils-helper) | Conditional & Filtering Utilities | `Exclude`, `Extract`, `NonNullable` |
| **28** | [`src/28-utils-awaited`](src/28-utils-awaited) | Async Promise Unwrapping | `Awaited<T>` for recursive promise resolution and async flows |

### Part 5: Object-Oriented Programming & Classes (Modules 29–31)
| Module | Folder | Topic | Description |
| :---: | :--- | :--- | :--- |
| **29** | [`src/29-class-constructor`](src/29-class-constructor) | Classes & Constructors | Class definitions, instance properties, methods, and parameter properties |
| **30** | [`src/30-access-modifiers`](src/30-access-modifiers) | Access Modifiers | `public`, `private`, `protected`, `readonly`, and ES2022 private `#fields` |
| **31** | [`src/31-getters-setters`](src/31-getters-setters) | Getters & Setters | Data validation, computed properties, unit conversion, and read-only accessors |

---

## How to Run the Examples

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the TypeScript Code
The project compiles TypeScript files from `src/` into JavaScript in `dist/` according to `tsconfig.json`.
```bash
npm run build
```

### 3. Run Individual Modules with Node.js
You can execute any compiled module:
```bash
node dist/01-primitives/index.js
# ... through ...
node dist/31-getters-setters/index.js
```

---

## TypeScript Compiler Settings (tsconfig.json)
This course runs under strict industry standards:
- `"strict": true` (enables all strict type-checking options)
- `"noUncheckedIndexedAccess": true`
- `"exactOptionalPropertyTypes": true`
- `"target": "es2022"` / `"module": "es2022"`

---

## Suggested Practice Projects
Once you complete all 31 modules, try building:
1. **A CLI Task Manager**: Manage todos with categories, priorities (literal unions), and strict object shapes.
2. **An API Response Parser**: Safely parse JSON API responses using runtime type guards (`v is Type`) and union states (`loading | success | error`).
3. **An Object-Oriented Domain Model**: Implement a robust banking or e-commerce domain using classes, access modifiers, getters/setters, and generics.
