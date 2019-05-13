// 3. Check for Types in Array

function areSameType(args) {
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (typeof args[i] === typeof args[j]) {
                return true;
            } else { 
                return false;
            }
        }
    }
}


areSameType(['hello', 'world', 'long sentence'])// => true
areSameType([1, 2, 9, 10]) // => true
console.log(areSameType([['hello'], 'hello', ['bye']])) // => false
areSameType([['hello'], [1, 2, 3], [{ a: 2 }]]) // => true