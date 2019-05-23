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

function mergeArrays(arr1, arr2) {
    let result = [];
    let index1 = 0; 
    let index2 = 0;
    while (result.length < arr1.length + arr2.length) {
        if (arr1[index1] < arr2[index2] || index2 >= arr2.length) {
            result.push(arr1[index1]);
            index1++;
        } else if (arr1[index1] > arr2[index2] || index1 >= arr1.length) {
            result.push(arr2[index2]);
            index2++;
        }
    }
    return result;
}

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }
    let middleIndex = Math.floor(arr.length / 2);

    let leftPart = arr.slice(0, middleIndex);
    let rightPart = arr.slice(middleIndex);

    let sortedArr1 = mergeSort(leftPart);
    let sortedArr2 = mergeSort(rightPart);

    return mergeArrays(sortedArr1, sortedArr2);
}


let arrBlabla = [2, 75, 4, 5, 0, 6, 46, 10];
//let arrNew = [7, 9, 11, 15, 24];
console.log(mergeSort(arrBlabla));
