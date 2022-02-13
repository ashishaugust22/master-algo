// 66. Plus One

// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    return increase(digits, digits.length - 1);
};

var increase = function (arr, index) {
    if (arr[index] === 9) {
        if (index === 0) {
            arr[index] = 0;
            arr.unshift(1);
            return arr;
        } else {
            arr[index] = 0;
            return increase(arr, index - 1);
        }
    } else {
        arr[index] = arr[index] + 1;
        return arr;
    }
};


let result = plusOne([9]);

console.log(result);





// iterative solution
module.exports = {
    //param A : array of integers
    //return a array of integers
    plusOne: function (A) {
        let carry = true;
        let index = A.length - 1;
        while (carry) {
            if (A[index] === 9) {
                if (index === 0) {
                    A[index] = 0;
                    A.unshift(1);
                    carry = false;
                } else {
                    A[index] = 0;
                    index--;
                }
            } else {
                A[index] = A[index] + 1;
                carry = false;
            }
        }
        A = this.removePrefixZeros(A);
        return A;
    },
    removePrefixZeros: function (A) {
        while (A[0] === 0) {
            A.shift();
        }
        return A;
    }
};
