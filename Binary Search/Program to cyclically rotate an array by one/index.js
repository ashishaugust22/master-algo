// Program to cyclically rotate an array by one

// clockwise rotation
function rotateByOne(arr) {
    let lastElement = arr[arr.length - 1];
    let len = arr.length;
    for (let i = len - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
    return arr;
}


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const afterRotate = rotateByOne(arr);
console.log(afterRotate);