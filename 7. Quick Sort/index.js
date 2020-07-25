let quickSort = function (arr, left, right) {
    let index = partition(arr, left, right);
    if (left < index - 1) quickSort(arr, left, index - 1);
    if (index < right) quickSort(arr, index + 1, right);
};

let partition = function (arr, low, high) {
    let pivot = arr[low];
    let i = high;
    let j = high;

    while (j > low) {
        if (arr[j] > pivot) {
            swap(arr, i, j);
            i--;
        }
        j--;
    }
    swap(arr, low, i);
    return i;
};


let swap = function (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

var items = [5, 3, 7, 6, 2, 9];
var result = quickSort(items, 0, items.length - 1);

console.log(result);
