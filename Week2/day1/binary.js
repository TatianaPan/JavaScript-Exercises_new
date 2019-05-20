// Binary search algorithm
// PROBLEM: Given a list of sorted integers, find index of query value

// INPUT: List L of n numbers, query item q

// OUTPUT: Index i of q in L. Return i=-1 if it doesn’t exist.

// // ALGORITHM: binarySearch(L, q) 1. If n == 0, then we haven’t found the element -> return -1 
// 1. If L[n/2] == q, return n/2 
// 1. If L[n/2] > q, then search in lower half of array, i.e. return binarySearch(L[0...n/2]) 
// 1. If L[n/2] < q, then search in upper half of array, i.e. return binarySearch(L[n/2...n])



function binarySearch(arr, target) {

    if (arr.length === 0) {
        return -1;
    }

    let firstIndex = 0;
    let lastIndex = arr.length - 1;

    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

        if (arr[middleIndex] === target) {
            return middleIndex;
        }
        if (arr[middleIndex] < target) {
            firstIndex = middleIndex + 1;
        } else if (arr[middleIndex] > target) {
            lastIndex = middleIndex - 1;
        } 
    }
    return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 7;
console.log(binarySearch(arr, target));
