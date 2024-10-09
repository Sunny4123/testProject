"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b + a;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            }
            else {
                console.error("Division by zero is not allowed.");
                return null;
            }
        default:
            console.error("Invalid operator.");
            return null;
    }
}
exports.Utils = { calculate };
//web browser (google.com) ---> (request) ---> google company server
//                 <html>... (html)  <-- (respon) -----google company server
