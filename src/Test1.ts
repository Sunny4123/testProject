import { Utils } from "./Utils";



let allTestsPassed = true;

if (Utils.calculate(1, 1, '+') === 4) {
    console.log(0);
} else {
    console.log(1001);
    allTestsPassed = false;
}

if (Utils.calculate(5, 3, '-') === 2) {
    console.log(0);
} else {
    console.log(1002);
    allTestsPassed = false;
}

// if (Utils.calculate(3, 4, '*') === 10) {
//     console.log(0);
// } else {
//     console.log(1003);
//     allTestsPassed = false;
// }

// if (Utils.calculate(10, 2, '/') === 5) {
//     console.log(0);
// } else {
//     console.log(1004);
//     allTestsPassed = false;
// }

// if (!allTestsPassed) {
//     console.log(1005);
// }
