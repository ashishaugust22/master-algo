// Delete Elements
// Problem Description

// Given an integer array A of size N.
// Find the minimum number of elements that need to be removed such that the GCD of the resulting array becomes 1.

// If not possible then return -1.



// Problem Constraints
// 1 <= N <= 100000
// 1 <= A[i] <= 1e9


// Input Format
// Input contains a single integer array A



// Output Format
// Return an integer



// Example Input
// Input 1:

//  A = [7, 2, 5]


// Example Output
// Output 1:

//  0


// Example Explanation
// Explanation 1:

//  GCD of the array A is 1.
//  so, the number of elements to be removed is 0.



// so the idea of the problem is 
// no matter what you delete if initial GCD is not one
// then it will never be one

module.exports = {
    //param A : array of integers
    //return an integer
    solve: function (A) {
        let gcd;
        for (let i = 0; i < A.length; i++) {
            if (i === 0) {
                gcd = this.gcd(A[0], A[i]);
            } else {
                gcd = this.gcd(gcd, A[i]);
            }
        }
        return gcd === 1 ? 0 : -1;
    },
    gcd: function (A, B) {
        let first = A > B ? A : B;
        let second = A > B ? B : A;

        while (second > 0) {
            first = first % second;

            let temp = first;
            first = second;
            second = temp;
        }
        return first;
    },
};
