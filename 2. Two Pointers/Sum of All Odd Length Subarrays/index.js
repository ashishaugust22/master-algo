// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/


var sumOddLengthSubarrays = function (arr) {
    let total = 0;
    currSum = 0;
    debugger;
    for (let i = 1; i <= arr.length; i++) {
        if (i % 2 !== 0) {
            let j = 0;
            let k = 0;
            let currSum = 0;
            while (k - j < i) {
                currSum += arr[k];
                k++;
            }
            total += currSum;
            while (k < arr.length) {
                currSum -= arr[j];
                currSum += arr[k];
                total += currSum;
                j++;
                k++;
            }
        }
    }
    return total;
};


let arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));


