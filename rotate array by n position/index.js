// https://www.geeksforgeeks.org/array-rotation/
// Program for array rotation
// Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.

function rotateByNpositions(arr, d) {
    for (let i = 0; i < d; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr);
}

rotateByNpositions([1, 2, 3, 4, 5, 6], 2);