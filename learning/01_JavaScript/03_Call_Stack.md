# JavaScript Call Stack

## What is Call Stack?

The call stack is a data structure that JavaScript uses to keep track of which function is currently running and what should run next. It stores execution contexts, one on top of another.

Every time a function is called, its execution context is placed on top of the stack. When that function finishes, its context is removed from the top. Because JavaScript has only one call stack, it can run only one piece of code at a time.

## Why do we need it?

JavaScript needs a way to remember where it is in a program, especially when functions call other functions. The call stack answers three questions at every moment:

- Which function is running right now? (the one on top)
- Where should control return when this function finishes? (the one below it)
- What order should nested calls resume in?

Without the call stack, JavaScript could not pause one function to run another and then come back to the exact spot it left.

## Push

**Push** means adding an execution context to the top of the stack.

A push happens every time:

- The program starts — the **Global Execution Context** is pushed first.
- A function is called — a new **Function Execution Context** is pushed on top.

The most recently pushed context is always the one currently running.

## Pop

**Pop** means removing the execution context from the top of the stack.

A pop happens when a function finishes — either it reaches the end of its body, or it hits a `return` statement. Control then returns to the context now sitting on top (the function that called it).

The Global Execution Context is popped last, when the whole program ends.

## LIFO

The call stack follows **LIFO** — **Last In, First Out**. The last execution context added to the stack is the first one removed.

Push order and pop order are always opposite:

```text
Push order:   Global → x() → y() → z()
Pop order:    z() → y() → x() → Global
```

Real-life picture: a stack of plates. The last plate you place on top is the first one you take off.

```text
Plate 5  ← removed first
Plate 4
Plate 3
Plate 2
Plate 1  ← removed last
```

## Stack Overflow

If functions keep getting pushed and never popped, the stack keeps growing until it runs out of space. This is a **stack overflow**.

The classic cause is infinite recursion — a function that calls itself with no stopping condition:

```javascript
function test() {
    test();   // calls itself forever, nothing ever pops
}

test();
```

Each call pushes a new `test()` context, and none of them ever finishes, so none is ever popped. Eventually the browser stops it with:

```text
RangeError: Maximum call stack size exceeded
```

Picture stacking books forever — at some point there is no more room, and the stack overflows.

## Relationship with Execution Context

The two ideas fit together directly:

- An **execution context** is the environment where a piece of code runs (from Module 1).
- The **call stack** is the structure that stores and orders those execution contexts.

So the call stack is not a separate thing from execution contexts — it is how JavaScript manages them. Each function call creates one execution context, that context is pushed onto the call stack while it runs, and it is popped when the function finishes.

## Real Project Example

This is exactly what happens inside a React app when you click a button.

```text
Button Click
    ↓
handleClick()
    ↓
validateForm()
    ↓
saveData()
    ↓
API Call
```

At the moment `saveData()` is running, the call stack looks like this:

```text
saveData()
validateForm()
handleClick()
Global
```

`handleClick()` is paused waiting for `validateForm()`, which is paused waiting for `saveData()`. This is also why a JavaScript error shows a **stack trace** — it is printing the call stack at the moment the error happened. Reading that trace tells you exactly which function called which, all the way down.

## Interview Questions

Try answering these without searching.

What is the call stack, and what does it store?
What do push and pop mean, and when does each happen?
What does LIFO stand for, and why does the call stack follow it?
What is a stack overflow, and what error does the browser show?
Why is JavaScript called single-threaded? (Hint: how many call stacks does it have?)
When `A()` calls `B()`, what happens to `A()` while `B()` runs?

## Revision Notes

- The call stack is a LIFO structure that stores execution contexts.
- A function call **pushes** a context; a finish or `return` **pops** it.
- Global context is pushed first and popped last.
- Push order and pop order are always opposite.
- Number of pushes = number of pops = number of execution contexts created.
- A caller does not disappear when it calls another function — it **waits** on the stack and resumes after the callee is popped.
- Infinite recursion with no base case causes a stack overflow (`RangeError: Maximum call stack size exceeded`).
- JavaScript is single-threaded because it has only **one** call stack, so it runs one piece of code at a time.
