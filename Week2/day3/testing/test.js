const test = require('tape');
const exercises = require('./exercises.js');

test('isString should return true if type is string', (t) => {
    t.equal(true, exercises.isString("Hello"));
    t.equal(false, exercises.isString(1));
    t.equal(true, exercises.isString("Hello"));
    t.equal(false, exercises.isString([1,2,3,]));
    t.end();
});

test('isArray should return true if type is array', (t) => {
    t.equal(true, exercises.isArray(['hello']));
    t.equal(false, exercises.isArray('hello'));
    t.equal(true, exercises.isArray([2, {}, 10]));
    t.equal(false, exercises.isArray({1 : 'a'}));
    t.equal(false, exercises.isArray(189243));
    t.equal(true, exercises.isArray([[123, 534], ['blablabla', 24, [2, 2,4]]]));
    t.end();
});

test('areSameType should return true if elements of array have the same type', (t) => {
    t.deepEqual(true, exercises.areSameType(['hello', 'world', 'long sentence']));
    t.deepEqual(true, exercises.areSameType([1, 2, 9, 10]));
    t.deepEqual(false, exercises.areSameType([['hello'], 'hello', ['bye']]));
    t.deepEqual(true, exercises.areSameType([['hello'], [1, 2, 3], [{ a: 2 }]]));
    t.deepEqual(false, exercises.areSameType([[1, 2, 3], {a : 1}]));
    t.end();
});

test('longest should return sorted string without duplicated characters', (t) => {
    t.equal('abcdfz', exercises.longest('abcccaa', 'acddddffzzz'));
    t.equal('abcdefklmopqwxy', exercises.longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
    t.equal('abcdefghijklmnopqrstuvwxyz', exercises.longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'));
    t.equal('abcdefg', exercises.longest('AfgG', 'bBcDe'));
    t.end();
})

test('convert should return reversed array of digits', (t) => {
    t.deepEqual([9, 6, 5, 4, 3, 2], exercises.convert(429563));
    t.deepEqual([4, 3, 2], exercises.convert(324));
    t.end();
})