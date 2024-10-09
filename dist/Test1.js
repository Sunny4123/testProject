"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
let allTestsPassed = true;
// Define test cases as an array of objects
const testCases = [
    { a: 1, b: 1, op: '+', expected: 2, testId: 1001 },
    { a: 5, b: 3, op: '-', expected: 2, testId: 1002 },
    { a: 4, b: 2, op: '*', expected: 8, testId: 1003 }, // example new test case
    { a: 10, b: 2, op: '/', expected: 5, testId: 1004 },
    { a: 10, b: 0, op: '/', expected: null, testId: 1005 }
];
// Function to run each test case
testCases.forEach(test => {
    const result = Utils_1.Utils.calculate(test.a, test.b, test.op);
    if (result === test.expected) {
        console.log(`Test ${test.testId}: Passed`);
    }
    else {
        console.log(`Test ${test.testId}: Failed (Expected: ${test.expected}, Got: ${result})`);
        allTestsPassed = false;
    }
});
process.exit(allTestsPassed ? 0 : 1);
