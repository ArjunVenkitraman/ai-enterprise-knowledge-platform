const globalTopic = "JavaScript";

function outer() {
    const lesson = "Lexical Environment";

    function inner() {
        const section = "Scope Chain";

        console.log(section);     // Current scope
        console.log(lesson);      // Parent scope
        console.log(globalTopic); // Global scope
    }

    inner();
}

outer();

// console.log(section); // ReferenceError: section is not in this scope
