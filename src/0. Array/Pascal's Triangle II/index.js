// 119. Pascal's Triangle II

// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1,3,3,1]


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let subArrayLength = 1;
    let currentSubArray = 0;
    let palindromeArr = [];
    let subArr = [];

    while (currentSubArray <= rowIndex) {
        subArr = [];
        for (let i = 0; i < subArrayLength; i++) {
            if (i === 0 || i === subArrayLength - 1) {
                subArr[i] = 1;
            } else {
                subArr[i] = palindromeArr[currentSubArray - 1][i - 1] + palindromeArr[currentSubArray - 1][i];
            }
        }
        palindromeArr.push(subArr);
        currentSubArray++;
        subArrayLength++;
    }
    return subArr;
};


// TODO: Could you optimize your algorithm to use only O(k) extra space?