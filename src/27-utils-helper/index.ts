// TypeScript Learning Example: Conditional and Filtering Utility Types
// This file demonstrates how to use Exclude<T, U>, Extract<T, U>, and NonNullable<T>
// to filter and refine union types.

export {};

// 1. Exclude<T, U>
// Excludes from `T` all types that are assignable to `U`.
type AllEventTypes = "click" | "submit" | "hover" | "keydown" | "keyup";

// Exclude keyboard events from all events
type MouseAndUIEventTypes = Exclude<AllEventTypes, "keydown" | "keyup">; // "click" | "submit" | "hover"

function handleEvent(event: MouseAndUIEventTypes): void {
    console.log(`Handling UI Event: ${event}`);
}

handleEvent('click');
handleEvent('hover');
handleEvent('submit');
// handleEvent('keydown'); // Error: Argument of type '"keydown"' is not assignable to parameter of type 'MouseAndUIEventTypes'

// 2. Extract<T, U>
// Extracts from `T` all types that are assignable to `U` (retaining only the intersection).
type CrudActions = "create" | "read" | "update" | "delete" | "patch";

// Extract only mutating actions
type MutatingActions = Extract<CrudActions, "create" | "update" | "delete">; // "create" | "update" | "delete"

function handleAction(action: MutatingActions): void {
    console.log(`Executing Mutating Action: ${action}`);
}

handleAction('create');
handleAction('update');
handleAction('delete');
// handleAction('read'); // Error: Argument of type '"read"' is not assignable to parameter of type 'MutatingActions'

// 3. NonNullable<T>
// Constructs a type by excluding `null` and `undefined` from `T`.
type MaybeValue = string | number | null | undefined;
type CleanValue = NonNullable<MaybeValue>; // string | number

function processValue(val: CleanValue): string {
    if (typeof val === "number") {
        return `Number value: ${val * 2}`;
    }
    return `String value: ${val} ${val}`;
}

console.log(processValue(10));
console.log(processValue("hello"));
// processValue(null); // Error: Argument of type 'null' is not assignable to parameter of type 'CleanValue'
