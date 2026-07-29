# Event Loop

## Definition

The Event Loop is the runtime coordination mechanism that decides when queued asynchronous work may execute. It allows JavaScript to remain responsive even though JavaScript code runs one task at a time on the Call Stack.

## Why do we need it?

Synchronous JavaScript must finish before another task can use the Call Stack. The Event Loop connects browser-managed asynchronous operations and their queues with the JavaScript engine, allowing ready callbacks to execute at the correct time.

## Flow / Diagram

```text
JavaScript starts asynchronous work
                 ↓
Browser Web API handles the operation
                 ↓
Ready callback enters a queue
                 ↓
Current Call Stack finishes
                 ↓
Microtasks are processed
                 ↓
Event Loop selects the next task
                 ↓
Callback runs on the Call Stack
```

## Important Points

- The Event Loop coordinates execution; it does not execute JavaScript itself.
- Synchronous code on the current Call Stack finishes first.
- Ready callbacks wait in queues until they are eligible to run.
- Microtasks, including Promise handlers, run before the next regular task.
- A zero-millisecond timer does not run immediately.
- Long synchronous work blocks callbacks and can make the page unresponsive.

## Interview Answer

The Event Loop coordinates the Call Stack and the runtime's task queues. JavaScript completes the current synchronous task before other queued tasks can run. After the stack is clear, pending microtasks are processed before the next regular task is selected. The chosen callback is then executed by the JavaScript engine on the Call Stack. This mechanism enables non-blocking behavior in browser applications.

## Easy Analogy

The Event Loop is like traffic control at a one-lane bridge. The bridge represents the Call Stack, and queued vehicles represent callbacks. Traffic control allows the next eligible vehicle onto the bridge only when the current traffic has cleared.

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

`Start` and `End` are synchronous. The Promise handler enters the Microtask Queue, while the timer callback becomes a regular task. After synchronous code finishes, JavaScript processes the microtask before the next timer task, so `Promise` appears before `Timer`.
