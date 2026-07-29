# Hoisting

## What is Hoisting?

Hoisting describes how JavaScript processes declarations before it executes the code in a scope.

During the creation of an execution context, JavaScript registers variables and functions in memory. Because of this preparation, some declarations appear to be available before the line where they are written. The source code is not physically moved to the top.

## Memory Creation Phase

Before executing statements, JavaScript scans the current scope and prepares memory:

- A `var` variable is created and initialized with `undefined`.
- A `let` variable is created but remains uninitialized.
- A `const` variable is created but remains uninitialized.
- A function declaration is stored with its complete function body.

The different initialization rules explain why declarations behave differently when accessed early.

## Execution Phase

JavaScript runs the program from top to bottom during this phase:

- Assignment expressions give variables their values.
- A `let` or `const` declaration becomes accessible when execution reaches it.
- A function call creates a new function execution context.
- Trying to access an uninitialized binding produces a `ReferenceError`.

## var Hoisting

A variable declared with `var` is initialized with `undefined` during the memory creation phase. It can therefore be read before its declaration line, but its assigned value is not available yet.

```javascript
console.log(score); // undefined

var score = 100;

console.log(score); // 100
```

JavaScript prepares `score` first. The value `100` is assigned only when execution reaches the assignment.

## let Hoisting

A variable declared with `let` is also registered before execution, but it is not initialized immediately. Accessing it before its declaration results in a `ReferenceError`.

```javascript
console.log(age); // ReferenceError

let age = 25;
```

The variable exists in the scope, but it remains in the Temporal Dead Zone until the declaration is evaluated.

## const Hoisting

A variable declared with `const` follows the same hoisting behavior as `let`: its binding is created but remains uninitialized until execution reaches the declaration.

```javascript
console.log(country); // ReferenceError

const country = "India";
```

A `const` declaration must include an initial value because it cannot be assigned later.

```javascript
const language; // SyntaxError
```

## Difference Between var, let and const

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function scoped | Block scoped | Block scoped |
| Registered before execution | Yes | Yes | Yes |
| Initial value during memory creation | `undefined` | Uninitialized | Uninitialized |
| Accessible before declaration | Yes, as `undefined` | No | No |
| Can be reassigned | Yes | Yes | No |
| Can be redeclared in the same scope | Yes | No | No |
| Must be initialized at declaration | No | No | Yes |

Prefer `const` when a variable will not be reassigned. Use `let` when reassignment is necessary. Avoid `var` in modern JavaScript unless its function-scoped behavior is specifically required.

## Common Myth

A common explanation says that JavaScript moves declarations to the top of the file or scope. JavaScript does not rearrange the written code.

Hoisting is a useful way to describe the result of declarations being registered during the memory creation phase. Assignments remain exactly where they were written and happen during execution.

```javascript
console.log(total); // undefined
var total = 50;
```

This does not behave as though `var total = 50` moved to the top. Only the declaration is prepared with `undefined`; the assignment still happens on the second line.

## Temporal Dead Zone (Introduction)

The Temporal Dead Zone, or TDZ, is the period between entering a scope and executing a `let` or `const` declaration in that scope.

```javascript
{
    // The TDZ for name starts when this block is entered.
    console.log(name); // ReferenceError

    let name = "Alex"; // The TDZ ends here.
    console.log(name); // Alex
}
```

The TDZ helps detect accidental access before initialization instead of silently returning `undefined`.

## Interview Questions

1. What is hoisting in JavaScript?
2. Does JavaScript physically move declarations to the top?
3. What value does a hoisted `var` variable have before assignment?
4. Are `let` and `const` hoisted?
5. Why does accessing `let` or `const` before declaration throw a `ReferenceError`?
6. What is the Temporal Dead Zone?
7. How do function declarations behave during the memory creation phase?
8. How is hoisting related to an execution context?
9. What is the difference between declaration, initialization, and assignment?
10. Why is `const` required to have an initial value?

## My Understanding

Hoisting is the result of JavaScript preparing declarations when it creates an execution context. It does not mean that JavaScript moves my code.

`var`, `let`, and `const` are all registered before execution, but they are initialized differently. A `var` variable starts with `undefined`, while `let` and `const` remain uninitialized in the Temporal Dead Zone. When execution reaches their declaration, they become available. This is why reading `var` early returns `undefined`, but reading `let` or `const` early throws a `ReferenceError`.

## My Understanding of Hoisting

- JavaScript creates memory for all variables during the Memory Creation Phase.
- `var`, `let`, and `const` are all hoisted.
- `var` is initialized with `undefined`.
- `let` and `const` are created but remain `<uninitialized>`.
- The period between memory creation and initialization is called the Temporal Dead Zone (TDZ).
- Accessing a `let` or `const` variable during the TDZ throws a `ReferenceError`.

🥇 Golden Rules – Hoisting
Every Execution Context has a Memory Creation Phase and an Execution Phase.
var, let, and const are all hoisted.
var is initialized with undefined.
let and const are initialized as <uninitialized>.
Accessing a let or const variable before its declaration executes results in a ReferenceError.
Every function has its own memory, separate from the global memory.