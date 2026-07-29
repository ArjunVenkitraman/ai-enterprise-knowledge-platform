# Closures

## Definition

A closure is created when a function remembers and can access variables from the lexical environment where it was defined, even after the outer function has finished executing.

A closure is not a special type of function that must be declared with new syntax. JavaScript functions naturally form closures based on where they are written.

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

The `increment` function continues to use `count`, although `createCounter()` has already returned.

## Memory Creation Phase

When the global execution context is created, JavaScript registers the `createCounter` function and the `counter` variable.

When `createCounter()` is called, JavaScript creates a new function execution context. During its memory creation phase:

- Space is prepared for the local `count` variable.
- The `increment` function declaration is stored.
- The lexical environment receives a reference to its parent environment.

The local variable is initialized when execution reaches `let count = 0`.

## Execution Phase

JavaScript performs these steps:

1. It calls `createCounter()` and creates its execution context.
2. It initializes `count` with `0`.
3. It creates and returns the `increment` function.
4. The `createCounter` execution context is removed from the call stack.
5. The returned function is assigned to `counter`.
6. Calling `counter()` creates an execution context for `increment`.
7. `increment` finds `count` in its preserved outer lexical environment.
8. It increases and returns the value.

The call stack does not keep the completed `createCounter` execution context. Only the outer data still required by the returned function remains reachable.

## Why Closures Work

Closures work because a function stores a connection to the lexical environment in which it was created.

Normally, data that is no longer reachable can be removed by JavaScript's garbage collector. In this example, `count` remains reachable through `increment`, so it must be preserved. If the closure itself becomes unreachable, the preserved data can eventually be garbage-collected.

```text
counter
   │
   └── increment function
           │
           └── outer lexical environment
                    └── count: 0, 1, 2, ...
```

This gives a function persistent private state without creating a global variable.

## Lexical Environment

Lexical scope is determined by where a function is defined, not where it is called.

```javascript
const message = "Global";

function outer() {
    const message = "From outer";

    return function inner() {
        console.log(message);
    };
}

const showMessage = outer();
showMessage(); // From outer
```

`inner` searches for `message` in its own scope and then in the scope of `outer`. It finds `"From outer"` before reaching the global scope.

```text
inner lexical environment
          ↓ parent reference
outer lexical environment
          ↓ parent reference
global lexical environment
```

## Real-world Analogy

Imagine a student leaving a classroom with a backpack. The classroom session has ended, but the student carries the notes collected there. Later, the student can open the backpack and use those notes.

The returned function is like the student. Its closure is like the backpack, and the remembered outer variables are the notes inside it.

Each call to the outer function creates a different backpack:

```javascript
const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
```

`counterA` and `counterB` preserve separate `count` variables.

## Golden Rules

1. A closure is formed when a function uses values from its outer lexical scope.
2. The function remembers where it was defined, not where it is called.
3. An inner function can access variables from its outer function.
4. An outer function cannot directly access variables declared only inside its inner function.
5. Preserved variables can remain available after the outer function returns.
6. Every call to an outer function creates a new lexical environment.
7. Separate closures can hold separate copies of private state.
8. Captured variables are kept by reference, so a closure sees their current values.
9. Closures are useful for data privacy, callbacks, event handlers, and function factories.
10. Captured data remains in memory only while it is still reachable.

## Interview Questions

1. What is a closure in JavaScript?
2. How are closures related to lexical scope?
3. Why can an inner function access variables after its outer function returns?
4. Does a closure copy a captured variable or keep a reference to it?
5. Do all JavaScript functions form closures?
6. How can closures be used to create private state?
7. Why do two counters created by separate calls maintain different values?
8. How do closures interact with the call stack and garbage collection?
9. What problems can occur when closures capture more data than necessary?
10. Where are closures commonly used in real applications?

## My Understanding

A closure allows a function to continue using variables from the place where it was created. When an outer function returns an inner function, the outer execution context leaves the call stack, but the variables needed by the inner function remain reachable through its lexical environment.

This means I can use closures to preserve state without putting that state in the global scope. Each call to the outer function creates a separate environment, so I can create independent counters, configuration functions, or private values.


A closure is created when an inner function remembers and can access variables from its outer lexical environment, even after the outer function has finished executing. JavaScript preserves the outer lexical environment as long as the inner function still references it.