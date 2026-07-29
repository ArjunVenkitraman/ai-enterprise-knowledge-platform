# Async / Await

## Definition

`async` and `await` provide a clearer way to work with Promises. They let asynchronous steps be written in a style that reads similarly to synchronous code without blocking the entire JavaScript runtime.

---

## Important Points

- An `async` function always returns a Promise.
- `await` is normally used inside an `async` function.
- `await` pauses only the current function, not the entire program.
- Async/Await is built on top of Promises.
- Code after an `await` continues through the Microtask Queue.
- A rejected Promise can be handled with `try...catch`.

---

## Interview Answer

Async/Await is syntax built on top of Promises that makes asynchronous code easier to read and maintain. An `async` function always returns a Promise. When it reaches `await`, that function pauses until the Promise settles, but the JavaScript runtime can continue doing other work. Once the result is ready, the remaining function code is scheduled through the Microtask Queue. Errors can be handled using `try...catch`.

---

## Easy Analogy

A chef starts cooking food and waits for it to become ready. Only that chef's current task is paused; the rest of the restaurant continues working. When the food is ready, the chef resumes the task.

---

## Example

```javascript
async function greet() {
    const message = await Promise.resolve("Hello");
    console.log(message);
}

greet();
```

## Output & Reason

```text
Hello
```

`Promise.resolve()` creates an already-fulfilled Promise. Even though it is fulfilled, `await` pauses `greet()` and schedules its continuation as a microtask. The function then resumes, stores `"Hello"` in `message`, and prints it.
