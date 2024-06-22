#! /usr/bin/env node
import inquirer from "inquirer";
const questions = [
    {
        name: "question_1",
        type: "list",
        message: "TypeScript is a typed superset of _______",
        choices: ["javascript", "c#", "ReactJs", "java"],
        correctAnswer: "javascript",
    },
    {
        name: "question_2",
        type: "list",
        message: "______ command is used to generate a JavaScript file from a TypeScript file",
        choices: [
            "nmp fileName.ts",
            "tsc fileName.ts",
            "tsc -js fileName.js",
            "All of the above",
        ],
        correctAnswer: "tsc fileName.ts",
    },
    {
        name: "question_3",
        type: "list",
        message: "Which of the following statement declares a variable in TypeScript",
        choices: [
            "var myVal=123",
            "var myVal:number=123",
            "let myVal:number=123",
            "All of the above",
        ],
        correctAnswer: "All of the above",
    },
    {
        name: "question_4",
        type: "list",
        message: "Which of the followings primitive types supported in TypeScript",
        choices: ["string", "boolean", "number", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        name: "question_5",
        type: "list",
        message: "______ is similar to 'any', but a safer alternative when uncertain about the type.",
        choices: ["similar", "never", "unknown"],
        correctAnswer: "unknown",
    },
    {
        name: "question_6",
        type: "list",
        message: "Which TypeScript feature provides the ability to create a single definition for an object's structure?",
        choices: ["Interfaces", "Classes", "Enums", "Modules"],
        correctAnswer: "Interfaces",
    },
    {
        name: "question_7",
        type: "list",
        message: "How do you define a constant variable in TypeScript?",
        choices: ["const", "let", "var", "static"],
        correctAnswer: "const",
    },
    {
        name: "question_8",
        type: "list",
        message: "Which keyword is used to inherit a class in TypeScript?",
        choices: ["extends", "inherits", "implements", "uses"],
        correctAnswer: "extends",
    },
    {
        name: "question_9",
        type: "list",
        message: "What is the default access modifier for properties and methods in TypeScript classes?",
        choices: ["public", "private", "protected", "default"],
        correctAnswer: "public",
    },
    {
        name: "question_10",
        type: "list",
        message: "Which TypeScript feature allows you to define a function that can be called with different numbers or types of arguments?",
        choices: ["Function Overloading", "Function Overriding", "Generics", "Union Types"],
        correctAnswer: "Function Overloading",
    },
    {
        name: "question_11",
        type: "list",
        message: "Which TypeScript feature enables you to restrict a variable to a specific set of values?",
        choices: ["Enums", "Interfaces", "Type Aliases", "Generics"],
        correctAnswer: "Enums",
    },
    {
        name: "question_12",
        type: "list",
        message: "How do you specify an optional property in a TypeScript interface?",
        choices: ["Using a question mark", "Using an exclamation mark", "Using 'optional'", "Using 'maybe'"],
        correctAnswer: "Using a question mark",
    },
    {
        name: "question_13",
        type: "list",
        message: "Which of the following is true about 'never' type in TypeScript?",
        choices: ["It represents values that never occur", "It is a supertype of all types", "It is used to declare optional properties", "None of the above"],
        correctAnswer: "It represents values that never occur",
    },
    {
        name: "question_14",
        type: "list",
        message: "Which of the following is a way to combine types in TypeScript?",
        choices: ["Union Types", "Intersection Types", "Both of the above", "None of the above"],
        correctAnswer: "Both of the above",
    },
    {
        name: "question_15",
        type: "list",
        message: "What is the output of 'typeof null' in TypeScript?",
        choices: ["null", "object", "undefined", "boolean"],
        correctAnswer: "object",
    },
    {
        name: "question_16",
        type: "list",
        message: "Which of the following is a method to check for null or undefined in TypeScript?",
        choices: ["Optional Chaining", "Null Coalescing", "Both of the above", "None of the above"],
        correctAnswer: "Both of the above",
    },
    {
        name: "question_17",
        type: "list",
        message: "How do you declare a tuple in TypeScript?",
        choices: ["[string, number]", "string, number", "{string, number}", "(string, number)"],
        correctAnswer: "[string, number]",
    },
    {
        name: "question_18",
        type: "list",
        message: "Which operator is used to spread or gather elements in TypeScript?",
        choices: ["...", "&&", "||", "??"],
        correctAnswer: "...",
    },
    {
        name: "question_19",
        type: "list",
        message: "What is the output type of the 'Promise' in TypeScript?",
        choices: ["A value", "A function", "An object", "A type"],
        correctAnswer: "An object",
    },
    {
        name: "question_20",
        type: "list",
        message: "Which TypeScript utility type allows you to create a type with all properties of another type except for a few specified ones?",
        choices: ["Omit", "Pick", "Exclude", "Extract"],
        correctAnswer: "Omit",
    },
];
const quiz = await inquirer.prompt(questions.map(q => ({
    name: q.name,
    type: q.type,
    message: q.message,
    choices: q.choices
})));
// const quiz = await inquirer.prompt(questions.map(q => ({
//   name: q.name,
//   type: q.type,
//   message: q.message,
//   choices: q.choices,
// })));
let score = 0;
questions.forEach((q, index) => {
    if (quiz[q.name] === q.correctAnswer) {
        console.log(`${index + 1}. Correct!`);
        ++score;
    }
    else {
        console.log(`${index - 1}. Incorrect`);
    }
});
console.log(`Score: ${score}`);
