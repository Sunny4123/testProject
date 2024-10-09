function calculate(a: number, b: number, operator:string) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                console.error("Division by zero is not allowed.");
                return null;
            }
        default:
            console.error("Invalid operator.");
            return null;
    }
}

export const Utils = { calculate }


