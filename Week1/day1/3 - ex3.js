// 3. Check for Types in Array

function areSameType(args) {
    if (args.length === 0) {
        return true;
    }
    for (let i = 1; i < args.length; i++) {
        if (typeof args[i] !== typeof[0]) {
            return false;
        }
        return true;
    }
}


areSameType(['hello', 'world', 'long sentence'])// => true
areSameType([1, 2, 9, 10]) // => true
console.log(areSameType([['hello'], 'hello', ['bye']])) // => false
console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]])) // => true