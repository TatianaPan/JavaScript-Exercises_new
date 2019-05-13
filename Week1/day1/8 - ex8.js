// 8. Split the Bill

function splitTheBill(args) {
    let total = 0;
    for (let key in args) {
        total += args[key];
    }

    let amount = total / (Object.keys(args).length);
    
    for (let key in args) {
        args[key] = amount - args[key]; 
    }
    return args;
}

const group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}

console.log(splitTheBill(group)); // => { Amy: -5, Bill: 0, Chris: 5 }