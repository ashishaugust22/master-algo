// Pairs with given sum II
// Problem Description

// Given a sorted array of integers (not necessarily distinct) A and an integer B, find and return how many pair of integers ( A[i], A[j] ) such that i != j have sum equal to B.

// Since the number of such pairs can be very large, return number of such pairs modulo (109 + 7).



// Problem Constraints
// 1 <= |A| <= 100000

// 1 <= A[i] <= 10^9

// 1 <= B <= 10^9



// Input Format
// The first argument given is the integer array A.

// The second argument given is integer B.



// Output Format
// Return the number of pairs for which sum is equal to B modulo (10^9+7).



// Example Input
// Input 1:

// A = [1, 1, 1]
// B = 2
// Input 2:


// A = [1, 1]
// B = 2


// Example Output
// Output 1:

//  3
// Output 2:

//  1


// Example Explanation
// Explanation 1:

//  Any two pairs sum up to 2.
// Explanation 2:

//  only pair (1, 2) sums up to 2.




module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    solve: function (A, B) {
        let ans = 0;
        let i = 0;
        let j = A.length - 1;
        let mod = 1000000000 + 7;
        while (j - i > 0) {
            if (A[i] + A[j] === B) {
                let ii = i;
                let jj = j;
                if (A[i] == A[j]) {
                    let cnt = j - i + 1;
                    ans += (cnt * (cnt - 1) / 2) % mod;
                    ans %= mod;
                    break;
                }
                else {
                    // count number of elements with value A[i]
                    while (A[i] == A[ii]) {
                        ii++;
                    }
                    let cnt1 = ii - i;
                    i = ii;

                    // count number of elements with value A[i]
                    while (A[jj] == A[j]) {
                        jj--;
                    }
                    let cnt2 = j - jj;
                    j = jj;

                    ans += (cnt1 * cnt2) % mod;
                    ans %= mod;
                }
            } else
                if (A[i] + A[j] > B) {
                    j--;
                } else
                    if (A[i] + A[j] < B) {
                        i++;
                    }
        }
        return ans;
    }
};
