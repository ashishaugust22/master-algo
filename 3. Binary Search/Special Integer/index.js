// Special Integer
// Problem Description

// Given an array of integers A and an integer B, find and return the maximum value K such that there is no subarray in A of size K with sum of elements greater than B.



// Problem Constraints
// 1 <= |A| <= 100000
// 1 <= A[i] <= 10^9

// 1 <= B <= 10^9



// Input Format
// The first argument given is the integer array A.

// The second argument given is integer B.



// Output Format
// Return the maximum value of K (sub array length).



// Example Input
// Input 1:

// A = [1, 2, 3, 4, 5]
// B = 10
// Input 2:

// A = [5, 17, 100, 11]
// B = 130


// Example Output
// Output 1:

//  2
// Output 2:

//  3


// Example Explanation
// Explanation 1:

// Constraints are satisfied for maximal value of 2.
// Explanation 2:

// Constraints are satisfied for maximal value of 3.



module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    solve: function (A, B) {
        let start = 1;
        let end = A.length;
        let k = 0;
        while (end - start >= 0) {
            let mid = Math.floor(start + (end - start) / 2);
            if (this.isPossible(A, B, mid)) {
                k = mid;
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return k;
    },
    isPossible: function (A, B, len) {
        let i = 0;
        let j = 0;
        let sum = 0;
        while (j < A.length) {
            sum += A[j];
            j++;
            if (j - i > len) {
                sum -= A[i];
                i++;
            }

            if (sum > B) {
                return false;
            }
        }
        return true;
    }
};
