// 8. Split the Bill

function splitTheBill(args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += group[i];
    }

    let amount = total / (Object.keys(args).length);
    
    for (let i = 0; i < args.length; i++) {
        args[i] = amount - args[i]; 
    }
    return args;
}

const group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}

console.log(splitTheBill(group)); // => { Amy: -5, Bill: 0, Chris: 5 }