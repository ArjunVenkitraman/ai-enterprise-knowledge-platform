const platform = "AI Enterprise Knowledge Platform";

function showScope() {
    const lesson = "JavaScript Scope";

    if (true) {
        const progress = "In progress";
        console.log(platform);
        console.log(lesson);
        console.log(progress);
    }

    // console.log(progress); // ReferenceError: progress is block-scoped
}

showScope();

// console.log(lesson); // ReferenceError: lesson is function-scoped
