// Merge sort
// PROBLEM: Given a list of numbers, return a sorted list.

// INPUT: List L of n numbers, with at least one number in it.

// OUTPUT: The same list L, but sorted.

// ALGORITHM : mergeSort(L)

// Solve for first half: L_sorted_1 = mergeSort(L[0..n/2])

// Solve for second half: L_sorted_2 = mergeSort(L[n/2..n])

// Merge two algorithms: L = merge(L_sorted_1, L_sorted_2)
// PROBLEM: Given two sorted lists of numbers, return a combined and still sorted list.

// INPUT: List A and B of numbers

// OUTPUT: List L containing all numbers of L_1 and L_2 in sorted order.

// ALGORITHM : merge(A,B)

// Let L = [] be the array to return

// While there is elements in L_1 or L_2:

// 2.1. If A[0] < B[0] then remove A[0] and add at end of L

// 2.2. If A[0] >= B[0] then remove B[0] and add at it end of L

// 2.3. If A is empty, then remove B[0] and add at it end of L

// 2.4. If B is empty, then remove A[0] and add at it end of L

function mergeSort(arr) {
    let firstIndex = 0; 
    let lastIndex = arr.length - 1;
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    let arrSorted1 = arr.slice(0, middleIndex + 1);
    let arrSorted2 = arr.slice(middleIndex + 1, arr.length);

    function sliceArr(halfArr) {
        if (halfArr.length === 1 || halfArr.length === 2) {
            return halfArr;
        } 
            let first = 0;
            let last = halfArr.length - 1;
            let middle = Math.floor((first + last) / 2);
            let arr1 = halfArr.slice(0, middle + 1);
            return arr1, sliceArr(halfArr.slice(middle + 1));

    }
    
}

function sliceArr(halfArr) {
    
        let first = 0;
        let last = halfArr.length - 1;
        let middle = Math.floor((first + last) / 2);
        let arr1 = halfArr.slice(0, middle + 1);

        if (halfArr.length === 1 || halfArr.length === 2) {
            return arr1, halfArr;
        } 
        return arr1, sliceArr(halfArr.slice(middle + 1));

       

}
let arr = [3, 6, 4, 8, 1, 98]
console.log(sliceArr(arr));