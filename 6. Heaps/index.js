let heapSort = function (arr) {
    let heapLength = arr.length;
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, i, heapLength);
    }

    for (let i = arr.length - 1; i > 0; i--) {
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
    let parentIndex = i;
    let leftChildIndex = 2 * i + 1;
    let rightChildIndex = 2 * i + 2;

    if (leftChildIndex < heapLength && arr[leftChildIndex] > arr[parentIndex]) {
        parentIndex = leftChildIndex;
    }
    if (rightChildIndex < heapLength && arr[rightChildIndex] > arr[parentIndex]) {
        parentIndex = rightChildIndex;
    }
    if (i !== parentIndex) {
        swap(arr, parentIndex, i);
        heapify(arr, parentIndex, heapLength);
    }
};

const sortedArray = heapSort([3, 8, 2]);
console.log(sortedArray);
