# TypeScript Essentials: From Scratch to Intermediate

Welcome to the **TypeScript Essentials** course repository! This codebase is structured as a clear, progressive, beginner-friendly course designed to take you from absolute basics to confident, type-safe TypeScript development.

---

## 📚 Course Overview & Learning Path

The course is divided into 16 sequential modules, organized by topic in the `src/` directory. Each module contains an in-depth explanatory `README.md` and a runnable, well-commented TypeScript code example.

| Order | Module Folder | Topic | Description |
| :---: | :--- | :--- | :--- |
| **01** | [`src/01-primitives`](src/01-primitives) | Primitives | `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined` |
| **02** | [`src/02-type-inference`](src/02-type-inference) | Type Inference | How TypeScript infers types and when to use explicit annotations |
| **03** | [`src/03-literals`](src/03-literals) | Literal Types | Restricting values to exact literals and string literal unions |
| **04** | [`src/04-objects`](src/04-objects) | Objects & Shapes | Typing object structures, optional properties, readonly, and `Record` |
| **05** | [`src/05-type-assertions`](src/05-type-assertions) | Type Assertions | Using `as`, non-null assertions `!`, and runtime type guards |
| **06** | [`src/06-as-const`](src/06-as-const) | Const Assertions | Deep freezing with `as const` and deriving union types from arrays/objects |
| **07** | [`src/07-special-types`](src/07-special-types) | Special Types | Top and bottom types: `any`, `unknown`, `void`, `never` |
| **08** | [`src/08-unions`](src/08-unions) | Union Types | Combining types with `|` and narrowing with type guards |
| **09** | [`src/09-intersections`](src/09-intersections) | Intersection Types | Combining types with `&` and composing object shapes |
| **10** | [`src/10-arrays`](src/10-arrays) | Arrays | Typed arrays, union arrays, and readonly arrays |
| **11** | [`src/11-tuples`](src/11-tuples) | Tuples | Fixed-length typed arrays and labeled tuple elements |
| **12** | [`src/12-parameters`](src/12-parameters) | Parameter Annotations | Explicit function parameter and return type annotations |
| **13** | [`src/13-optional-defaults`](src/13-optional-defaults) | Optional & Default | Optional parameters (`?`), defaults (`=`), and nullish coalescing |
| **14** | [`src/14-rest-parameters`](src/14-rest-parameters) | Rest Parameters & Tuples | Variadic rest parameters and tuple spreading |
| **15** | [`src/15-return-types`](src/15-return-types) | Return Types | Inferred and explicit function return types across code paths |
| **16** | [`src/16-interfaces`](src/16-interfaces) | Interfaces | Object shapes, extending interfaces, declaration merging, and classes |

---

## 🚀 How to Run the Examples

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
node dist/02-type-inference/index.js
node dist/03-literals/index.js
node dist/04-objects/index.js
node dist/05-type-assertions/index.js
node dist/06-as-const/index.js
node dist/07-special-types/index.js
node dist/08-unions/index.js
node dist/09-intersections/index.js
node dist/10-arrays/index.js
node dist/11-tuples/index.js
node dist/12-parameters/index.js
node dist/13-optional-defaults/index.js
node dist/14-rest-parameters/index.js
node dist/15-return-types/index.js
node dist/16-interfaces/index.js
```

*(Note: Depending on how `tsconfig.json` preserves directory structure under `rootDir: "src"`, compiled files are output to `dist/01-primitives/index.js`, etc.)*

---

## 🛠️ TypeScript Compiler Settings (`tsconfig.json`)
This course runs under strict industry standards:
- `"strict": true` (enables all strict type-checking options)
- `"noUncheckedIndexedAccess": true`
- `"exactOptionalPropertyTypes": true`
- `"target": "es2022"` / `"module": "es2022"`

---

## 💡 Suggested Practice Projects
Once you complete all 16 modules, try building:
1. **A CLI Task Manager**: Manage todos with categories, priorities (literal unions), and strict object shapes.
2. **An API Response Parser**: Safely parse JSON API responses using runtime type guards (`v is Type`) and union states (`loading | success | error`).
