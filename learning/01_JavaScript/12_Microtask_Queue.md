# Microtask Queue

## Definition

The Microtask Queue stores high-priority work scheduled by Promises and similar mechanisms. Its ready tasks are processed before the runtime moves to the next regular task from the Callback Queue.

---

## Used By

- `Promise.then()`
- `Promise.catch()`
- `Promise.finally()`

---

## Important Points

- Microtasks have priority over regular tasks in the Callback Queue.
- They run after the current JavaScript task and Call Stack have finished.
- The runtime drains all ready microtasks before selecting the next regular task.
- A microtask can schedule another microtask during processing.
- Too many continuous microtasks can delay timers and browser rendering.

---

## Interview Answer

The Microtask Queue stores high-priority callbacks such as Promise handlers. Once the current synchronous task finishes and the Call Stack becomes empty, the runtime processes all ready microtasks. Only after the Microtask Queue has been drained does the Event Loop move to the next regular task from the Callback Queue.

---

## Easy Analogy

The Microtask Queue is a VIP queue ⭐, while the Callback Queue is the normal queue. After the current work finishes, everyone waiting in the VIP queue is served before the next person in the normal queue.
