let heapSort = function (arr) {
    let heapLength = arr.length;
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, i, heapLength);
    }

    for (let i = arr.length - 1; i > 0; i++) {
        swap(arr, 0, heapLength - 1);
        heapLength--;
        heapify(arr, 0, heapLength);
    }
    return arr;
};

let swap = function (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};


let heapify = function (arr, i, heapLength) {
    let parent = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < heapLength && arr[left] > arr[parent]) {
        parent = left;
    }
    if (right < heapLength && arr[right] > arr[parent]) {
        parent = right;
    }
    if (i !== parent) {
        swap(arr, parent, i);
        heapify(arr, parent, heapLength);
    }
};

heapSort([3, 0, 2, 5, -1, 4, 1]);
