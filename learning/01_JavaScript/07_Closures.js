function createCounter(name) {
    let count = 0;

    return function increment() {
        count += 1;
        console.log(`${name}: ${count}`);
    };
}

const learningCounter = createCounter("Learning");
const projectCounter = createCounter("Project");

learningCounter(); // Learning: 1
learningCounter(); // Learning: 2

projectCounter();  // Project: 1

learningCounter(); // Learning: 3
projectCounter();  // Project: 2
