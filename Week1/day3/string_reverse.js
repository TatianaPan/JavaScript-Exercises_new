String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

const y = new String('hello');

console.log(y.reverse());
console.log('hello'.reverse());