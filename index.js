/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let n = arr.length;
    if (x <= arr[0]) {
        return arr.slice(0, k);
    } else if (arr[n - 1] <= x) {
        return arr.slice(n - k, n);
    } else {
        let index = arr.indexOf(x);
        if (index < 0)
            index = -index - 1;
        let low = Math.max(0, index - k - 1);
        let high = Math.min(arr.length - 1, index + k - 1);

        while (high - low > k - 1) {
            if (low < 0 || (x - arr[low]) <= (arr[high] - x))
                high--;
            else if (high > arr.length - 1 || (x - arr[low]) > (arr[high] - x))
                low++;
            else
                console.log("unhandled case: " + low + " " + high);
        }
        return arr.slice(low, high + 1);
    }

};

let array = [1, 2, 3, 4, 5];

let result = findClosestElements(array, 4, 6);

console.log(result);