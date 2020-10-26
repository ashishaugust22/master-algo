// Delete one
// Problem Description

// Given an integer array A of size N. You have to delete one element such that the GCD(Greatest common divisor) of the remaining array is maximum.

// Find the maximum value of GCD.



// Problem Constraints
// 2 <= N <= 105
// 1 <= A[i] <= 109



// Input Format
// First argument is an integer array A.



// Output Format
// Return an integer denoting the maximum value of GCD.



// Example Input
// Input 1:

//  A = [12, 15, 18]
// Input 2:

//  A = [5, 15, 30]


// Example Output
// Output 1:

//  6
// Output 2:

//  15


// Example Explanation
// Explanation 1:


//  If you delete 12, gcd will be 3.
//  If you delete 15, gcd will be 6.
//  If you delete 18, gcd will 3.
//  Maximum vallue of gcd is 6.
// Explanation 2:

//  If you delete 5, gcd will be 15.
//  If you delete 15, gcd will be 5.
//  If you delete 30, gcd will be 5.


// idea is to precompute
// prefix & suffix arrays


module.exports = {
    //param A : array of integers
    //return an integer
    solve: function (A) {
        let prefix = [A[0]];
        let suffix = [A[A.length - 1]];
        let maxgcd = -Infinity;

        for (let i = 1; i < A.length; i++) {
            prefix.push(this.gcd(prefix[i - 1], A[i]));
        }

        for (let i = A.length - 2; i >= 0; i--) {
            suffix.unshift(this.gcd(suffix[0], A[i]));
        }

        for (let i = 0; i < A.length; i++) {
            let newGcd = this.gcd(prefix[i - 1] || 0, suffix[i + 1] || 0);
            if (newGcd > maxgcd) {
                maxgcd = newGcd;
            }
        }
        return maxgcd;
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
