// Sort integers in array according to their distance from the element K
// Given an array arr[] of N integers and an integer K, the task is to sort these integers according to their distance from given integer K. If more than 1 element are at same distance, print them in increasing order.

// Note: Distance between two elements in the array is measured as the difference between their index.

// Note : The integer K is always present in array arr[] and is unique.


const sortByDistance = (arr, k) => {
    const index = searchElement(arr, k);
    const len = arr.length;
    const sortedArr = [arr[index]];
    for (let i = 1; i < len; i++) {
        if (arr[index - i] !== undefined && arr[index + i] !== undefined) {
            const subArr = [arr[index - i], arr[index + i]];
            if (subArr[0] < subArr[1]) {
                sortedArr.push(subArr[0]);
                sortedArr.push(subArr[1]);
            } else {
                sortedArr.push(subArr[1]);
                sortedArr.push(subArr[0]);
            }
        }
        else if (index - 1 > -1 && arr[index - i] !== undefined) {
            sortedArr.push(arr[index - i]);
        } else if (arr[index + i] !== undefined) {
            sortedArr.push(arr[index + i]);
        }
    }
    console.log("Output", sortedArr);
};

function searchElement(arr, k) {
    const len = arr.length;
    let index = 0;
    for (let i = 0; i < len; i++) {
        if (arr[i] === k) {
            index = i;
            break;
        }
    }
    return index;
}

sortByDistance([12, 10, 102, 31, 15, 11, 13], 102);