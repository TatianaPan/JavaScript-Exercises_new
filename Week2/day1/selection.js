// Selection sort

// PROBLEM: Given a list of numbers, return a sorted list.

// INPUT: List L of n numbers, with at least one number in it.

// OUTPUT: The same list L, but sorted.

// ALGORITHM: selectionSort(L)

// Let L_unsorted = L be the unsorted portion of the array

// Let L_sorted = [] be the already sorted portion of the array

// While there is still an element in L_unsorted:

// 3.1. Find and remove the smallest element of L_unsorted

// 3.2. Move the element to the end of L_sorted

//let arr = [7, 5, 37, 1, 0, 68, 45, 98, 32];

function selectionSort(arr) {

    if (!arr.length) {
        return 'Array is empty';
    } else if (arr.length === 1) {
        return arr;
    }

    
    let amountOfPushed = 0;

    while (arr.length - 1 - amountOfPushed >= 0) {
        let smallest = arr[0];
        for (let i = 0; i <= arr.length - 1 - amountOfPushed; i++) {
            if (smallest > arr[i]) {
                smallest = arr[i];
            }
        }
        
        let i = arr.indexOf(smallest);
        arr.splice(i, 1);
        arr.push(smallest);
        amountOfPushed++;
    }

    return arr;
    
}
let arr = [];
console.log(selectionSort(arr));