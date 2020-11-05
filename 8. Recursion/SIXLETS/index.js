// SIXLETS
// Problem Description

// Given a array of integers A of size N and an integer B.

// Return number of non-empty subsequences of A of size B having sum <= 1000.



// Problem Constraints
// 1 <= N <= 20

// 1 <= A[i] <= 1000

// 1 <= B <= N



// Input Format
// The first argument given is the integer array A.

// The second argument given is the integer B.



// Output Format
// Return number of subsequences of A of size B having sum <= 1000.



// Example Input
// Input 1:

//     A = [1, 2, 8]
//     B = 2
// Input 2:

//     A = [5, 17, 1000, 11]
//     B = 4


// Example Output
// Output 1:

// 3
// Output 2:

// 0


// Example Explanation
// Explanation 1:

//  {1, 2}, {1, 8}, {2, 8}
// Explanation 1:

//  No valid subsequence


module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    solve: function (A, B) {
        let ans = [];
        this.recursive(A, B, ans, 1, [A[0]]);
        this.recursive(A, B, ans, 1, []);
        return ans.length;
    },
    recursive: function (A, B, ans, i, currSubArray) {
        if (currSubArray.length === B && this.getSum(currSubArray) <= 1000) {
            ans.push(1);
            return;
        }
        if (i === A.length || currSubArray.length === B) return;
        this.recursive(A, B, ans, i + 1, [...currSubArray, A[i]]);
        this.recursive(A, B, ans, i + 1, [...currSubArray]);
    },
    getSum: function (arr) {
        let sum = 0;
        for (let el of arr) {
            sum += el;
        }
        return sum;
    }
};
