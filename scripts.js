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

