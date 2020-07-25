// 118. Pascal's Triangle
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let subArrayLength = 1;
    let currentSubArray = 0;
    let palindromeArr = [];

    while (currentSubArray < numRows) {
        let subArr = [];
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
    return palindromeArr;
};