

let number1 = 0;
let operator = "";
let number2 = 0;

function operate(number1, number2, operator) {

    switch(operator) {
        case "+" :
            add(number1, number2);
            break;
        case "-" :
            subtract(number1, number2);
            break;
        case "/" :
            divide(number1 / number2);
            break;
        case "*" :
            multiply(number1, number2);
        default :
            alert("Something went wrong...")
    }
}


function add(...args) {
    return args.reduce((sum, arg) => sum + arg, 0);
    }
    
    function subtract (...args) {
    return args.reduce((total, arg) => total - arg, args[0]);
    }
    
    function multiply (...args) {
    return args.reduce((total, arg) => total * arg, 1);
    }
    
    function divide(...args) {
    return args.reduce((total, args) => total / args);
    }

