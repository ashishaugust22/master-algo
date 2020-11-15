// Subarray with given sum
// Problem Description

// Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.

// If the answer does not exist return an array with a single element "-1".

// First sub-array means the sub-array for which starting index in minimum.



// Problem Constraints
// 1 <= length of the array <= 100000
// 1 <= A[i] <= 109
// 1 <= B <= 109



// Input Format
// The first argument given is the integer array A.

// The second argument given is integer B.



// Output Format
// Return the first continuous sub-array which adds to B and if the answer does not exist return an array with a single element "-1".



// Example Input
// Input 1:

//  A = [1, 2, 3, 4, 5]
//  B = 5
// Input 2:

//  A = [5, 10, 20, 100, 105]
//  B = 110


// Example Output
// Output 1:

//  [2, 3]
// Output 2:

//  -1


// Example Explanation
// Explanation 1:

//  [2, 3] sums up to 5.
// Explanation 2:

//  No subarray sums up to required number.



module.exports = {
    //param A : array of integers
    //param B : integer
    //return a array of integers
    solve: function (A, B) {
        let i = 0;
        let j = 1;
        let ans = [A[0]];
        let sum = A[0];
        while (i < A.length || j < A.length) {
            if (sum === B) return ans;

            if (sum > B || j === A.length) {
                sum -= ans[0];
                ans.shift();
                i++;
            } else {
                ans.push(A[j]);
                sum += A[j];
                j++;
            }
        }
        return [-1];
    }
};
