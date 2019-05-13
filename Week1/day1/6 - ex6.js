// 6. Count Repetitions


let authors = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];

function count_authors(args) {
    let result = {};
    
    for (let i = 0; i < args.length; i++) {
        if (!result[args[i]]) {
            result[args[i]] = 1;
        } else {
            result[args[i]] += 1;
        }
    }
    return result;
}

console.log(count_authors(authors));

// {
//     kerouac: 2,
//     fante: 3,
//     buk: 2,
//     hemingway: 1,
//     hornby: 1
//   }