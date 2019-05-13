//4. Sort and Remove Duplicated Characters

function longest(a, b) {
    let c = [];
    let arr1 = a.split('');
    let arr2 = b.split('');
    let arr3 = (arr1.concat(arr2)).sort();
    for (let i = 0; i < arr3.length; i++) {
        if (c.includes(arr3[i]) !== true) {
            c.push(arr3[i]);
        }
    }
    return c.join('');ß
}

// const longest = a, b => {
//     let result = [];
//     let c = (a + b).split('').sort();
//     for (let i = 0; i < c.length; i++) {
//         if (result.includes(c[i]) !== true) {
//             result.push(c[i]);
//         }
//     } 
//     return result.join('');
// }

longest('abcccaa', 'acddddffzzz') // => 'abcdfz'

a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
longest(a, b) // => 'abcdefklmopqwxy'

a = 'abcdefghijklmnopqrstuvwxyz'
longest(a, a) // => 'abcdefghijklmnopqrstuvwxyz'