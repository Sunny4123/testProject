import { Utils } from "./Utils";

let allTestsPassed = true;

// Define test cases as an array of objects
const testCases = [
    { a: 1, b: 1, op: '+', expected: 2, testId: 1001 },
    { a: 5, b: 3, op: '-', expected: 2, testId: 1002 },
    { a: 4, b: 2, op: '*', expected: 8, testId: 1003 },  // example new test case
    { a: 10, b: 2, op: '/', expected: 5, testId: 1004 },
    { a:10, b: 0, op: '/', expected:null, testId: 1005}   // example new test case
];

// Function to run each test case
testCases.forEach(test => {
    const result = Utils.calculate(test.a, test.b, test.op);
    if (result === test.expected) {
        console.log(`Test ${test.testId}: Passed`);
    } else {
        console.log(`Test ${test.testId}: Failed (Expected: ${test.expected}, Got: ${result})`);
        allTestsPassed = false;
    }
});

// Exit with appropriate code
process.exit(allTestsPassed ? 0 : 1);

// import { Utils } from "./Utils";



// let allTestsPassed = true;

// if (Utils.calculate(1, 1, '+') === 4) {
//     console.log(0);
// } else {
//     console.log(1001);
//     allTestsPassed = false;
// }

// if (Utils.calculate(5, 3, '-') === 2) {
//     console.log(0);
// } else {
//     console.log(1002);
//     allTestsPassed = false;
// }

// // if (Utils.calculate(3, 4, '*') === 10) {
// //     console.log(0);
// // } else {
// //     console.log(1003);
// //     allTestsPassed = false;
// // }

// // if (Utils.calculate(10, 2, '/') === 5) {
// //     console.log(0);
// // } else {
// //     console.log(1004);
// //     allTestsPassed = false;
// // }

// // if (!allTestsPassed) {
// //     console.log(1005);
// // }
