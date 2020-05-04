// Search an element in a sorted and rotated array

/* An element in a sorted array can be found in O(log n) time via binary search. 
* But suppose we rotate an ascending order sorted array at some pivot unknown 
* to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2. 
* Devise a way to find an element in the rotated array in O(log n) time.
*/

function searchInRotatedArray(arr, n) {
    const pivotIndex = findPivotPosition(arr);
    if (n > arr[0]) {
        // leftSubArr
        return binarySearch(arr.slice(0, pivotIndex + 1), n);
    } else {
        // rightSubArr
        return pivotIndex + 1 + binarySearch(arr.slice(pivotIndex + 1, arr.length), n);
    }
}


function binarySearch(arr, n) {
    let low = 0;
    let high = arr.length;
    let median = Math.floor((high + low) / 2);
    while (arr[median] !== n && low < high) {
        if (n < arr[median]) {
            high = median - 1;
        } else if (n > arr[median]) {
            low = median + 1;
        }
        median = Math.floor((high + low) / 2);
    }
    return (arr[median] != n) ? -1 : median;
}


function findPivotPosition(arr) {
    const len = arr.length;
    for (i = 0; i < len; i++) {
        if (arr[i] > arr[i + 1]) {
            return i;
        }
    }
    return 0;
}


let a = [3, 4, 5, 1, 2];

let result = searchInRotatedArray(a, 5);
console.log(result);