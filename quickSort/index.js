let quickSort = function (arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);

        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (right > index) {
            quickSort(arr, index, right);
        }
    }
    return arr;
};

let partition = function (arr, low, high) {
    let i = low;
    let j = high;
    let pivot = arr[Math.floor((low + high) / 2)];

    while (i < j) {
        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
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
