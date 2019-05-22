function intersect(r1, r2) {
    let intersected = [];
    if (r1[0][0] < r2[1][0] && r1[1][0] > r2[0][0] 
        && r1[0][1] < r2[1][1] && r1[1][1] > r2[0][1]) {
            intersected.push(r2[0], r1[1]);
        } else {
            return false;
        }
        return intersected;
}

//console.log(intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]])); // => [2, 2], [4, 3]
console.log(intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]])); // => [2, 1], [4, 4]