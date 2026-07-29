# Promises & Microtask Queue

## Definition

A Promise is an object representing the eventual success or failure of an asynchronous operation. It allows code to register actions that should run when the result becomes available.

---

## Promise States

- **Pending** — the operation has not completed yet.
- **Fulfilled** — the operation completed successfully.
- **Rejected** — the operation failed.

A Promise is settled after it becomes fulfilled or rejected. Its state cannot change again after it settles.

---

## Microtask Queue

The Microtask Queue stores callbacks scheduled by settled Promises, including handlers registered with `.then()`, `.catch()`, and `.finally()`.

After the current synchronous code finishes, the runtime processes the Microtask Queue before moving to the next regular task from the Callback Queue.

```text
Call Stack becomes empty
          ↓
Process all ready microtasks
          ↓
Select the next regular task
          ↓
Execute it on the Call Stack
```

---

## Important Points

- `Promise.then()` schedules its handler in the Microtask Queue.
- `Promise.catch()` and `Promise.finally()` also schedule microtasks.
- `setTimeout()` schedules its callback as a regular task.
- Ready microtasks run before the next task from the Callback Queue.
- Promise handlers never interrupt currently executing synchronous code.
- Newly scheduled microtasks are processed before moving to the next regular task.

---

## Interview Answer

A Promise represents the future result of an asynchronous operation and can be pending, fulfilled, or rejected. When a settled Promise runs a `.then()`, `.catch()`, or `.finally()` handler, that handler is scheduled in the Microtask Queue. After the current Call Stack finishes, the runtime processes ready microtasks before selecting the next regular task. Therefore, a ready Promise callback normally executes before a `setTimeout` callback, even when the timer delay is zero.

---

## Easy Analogy

The Microtask Queue is like a VIP queue, while the Callback Queue is the normal queue. After the current customer is served, all waiting VIP customers are handled before the next person from the normal queue.

---

## One Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

## Output & Reason

```text
Start
End
Promise
Timer
```

`Start` and `End` execute synchronously. The Promise handler enters the Microtask Queue, while the timer callback waits as a regular task. When the Call Stack becomes empty, the microtask runs before the timer callback.
