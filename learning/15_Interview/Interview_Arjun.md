Interview Question

This is a classic interview question.

1) Why does setTimeout(fn, 0) not execute immediately?

Interview Answer

setTimeout(fn, 0) does not execute immediately because the callback is first handled by the Browser's Web API. Once the timer completes, the callback is placed in the Callback Queue. The Event Loop moves it to the Call Stack only when the Call Stack is empty. Therefore, all synchronous code executes before the callback.



2) Why does Promise execute before setTimeout()?

Your answer should be:

Promise callbacks are placed in the Microtask Queue, while setTimeout callbacks are placed in the Callback Queue. After the Call Stack becomes empty, the Event Loop first processes all Microtasks before moving to the Callback Queue. Therefore, Promise callbacks execute before setTimeout callbacks.

3) 