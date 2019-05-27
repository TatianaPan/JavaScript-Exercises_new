function merge(...args) {
    
    const newObj = {};
    
    args.forEach(obj => {
        for (let key in obj) {
            if (!newObj.hasOwnProperty(key)) {
                newObj[key] = obj[key]
            }
        }
        return newObj;
    });
}

console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 })); // { a: 3, b: 2, c: 4 }
console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5})); // { a: 3, b: 2, c: 4, e: 8 }
