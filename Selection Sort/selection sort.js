function selectionSort(arr) {
    const len = arr.length;
    for (i = 0; i < len; i++) {
        let min = arr[i];
        let index = i;
        for (j = i; j < len; j++) {
            if (arr[j] < min) {
                min = arr[j];
                index = j;
            }
        }
        arr[index] = arr[i];
        arr[i] = min;
    }
    return arr;
}

// arr = [64, 25, 12, 22, 11]



// Time Complexity: O(n2) as there are two nested loops.

// Auxiliary Space: O(1)
// The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation.

// Exercise :
// Sort an array of strings using Selection Sort

// Stability : The default implementation is not stable. However it can be made stable. Please see stable selection sort for details.

// In Place : Yes, it does not require extra space.


// Note: Subscripts are only used for understanding the concept.

// Input : 4A 5 3 2 4B 1
// Output : 1 2 3 4B 4A 5

// Stable Selection Sort would have produced
// Output : 1 2 3 4A 4B 5