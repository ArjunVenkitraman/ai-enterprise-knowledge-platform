# JavaScript Lexical Environment

## What is a Lexical Environment?

A lexical environment is an internal structure JavaScript uses to connect declarations with the scope in which they were written. The word *lexical* refers to the physical placement of code in the source file.

An inner function can access variables from its outer function because JavaScript remembers where that inner function was defined.

## Structure

A lexical environment contains:

1. An environment record that holds local variables and functions.
2. A reference to the parent lexical environment.

```text
Execution Context
        │
        ├── Memory
        │     └── Variables & Functions
        │
        └── Lexical Environment
              └── Parent Reference
```

The parent reference connects the current scope to its outer scope and creates the scope chain.

## Lexical Scope

The location where a function is defined determines its parent scope. The location where the function is called does not change that relationship.

```javascript
const topic = "Global topic";

function outer() {
    const topic = "Lexical Environment";

    function inner() {
        console.log(topic);
    }

    return inner;
}

const showTopic = outer();
showTopic(); // Lexical Environment
```

`inner` uses the `topic` from `outer` because it was defined inside `outer`.

## Scope Chain

When JavaScript cannot find a variable in the current lexical environment, it follows the parent reference.

```text
Current Scope
      ↓
Parent Scope
      ↓
Global Scope
      ↓
ReferenceError (if not found)
```

For a nested function, the environments might look like this:

```text
inner environment
    └── parent → outer environment
                     └── parent → global environment
                                      └── parent → null
```

The search stops as soon as a matching declaration is found. If it reaches `null` without finding one, JavaScript throws a `ReferenceError`.

## Lexical Environment and Execution Context

JavaScript creates an execution context when global code begins or a function is called. The context contains the information needed to run that code, including its lexical environment.

An execution context is the complete workspace for executing code. A lexical environment is the part that records declarations and links the current scope to its parent.

## Connection to Closures

A function can retain access to its outer lexical environment even after the outer function has finished. This behavior creates a closure.

```javascript
function createCounter() {
    let count = 0;

    return function increment() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

The returned function continues to access `count` through the lexical environment in which it was created.

## Key Points

- A lexical environment stores local declarations and a parent reference.
- Source-code nesting determines the parent environment.
- Parent references form the scope chain.
- Variable lookup begins locally and moves outward.
- Lookup never moves from a parent scope into a child scope.
- Closures preserve access to an outer lexical environment.

## Summary

A lexical environment explains how JavaScript knows which variables are available at a particular place in the code. Each environment contains its own declarations and a link to its parent. JavaScript follows those links to resolve variables through the scope chain.
