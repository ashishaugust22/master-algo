// ToDo: do it again....problem on the first time

function binary_Search(items, value) {
    var firstIndex = 0,
        lastIndex = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (items[middleIndex] != value && firstIndex < lastIndex) {
        if (value < items[middleIndex]) {
            lastIndex = middleIndex - 1;
        }
        else if (value > items[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));


function recursiveBinarySearch(items, value) {
    const left = 0;
    const right = items.length - 1;

    const index = binarySearch(items, left, right, value);

    return index;
}

function binarySearch(items, left, right, target) {
    const middle = Math.floor((right + left) / 2);
    if (items[middle] === target) return middle;

    if (items[middle] < target) left = middle + 1;
    if (items[middle] > target) right = middle - 1;

    if (left > right) return -1;

    return binarySearch(items, left, right, target);
}

// var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(recursiveBinarySearch(items, 1));
