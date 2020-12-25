// Kth Smallest Element
// Problem Description

// Find the Bth smallest element in given array A .

// NOTE: Users should try to solve it in <= B swaps.



// Problem Constraints
// 1 <= |A| <= 100000

// 1 <= B <= min(|A|, 500)

// 1 <= A[i] <= 109



// Input Format
// First argument is vector A.

// Second argument is integer B.



// Output Format
// Return the Bth smallest element in given array.



// Example Input
// Input 1:

// A = [2, 1, 4, 3, 2]
// B = 3
// Input 2:

// A = [1, 2]
// B = 2


// Example Output
// Output 1:

//  2
// Output 2:

//  2


// Example Explanation
// Explanation 1:

//  3rd element after sorting is 2.
// Explanation 2:

//  2nd element after sorting is 2.




// selection sort the element twice
//  if(A[i] < A[i + 1]){  then swap } 
module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    kthsmallest: function (A, B) {
        let count = B;
        while (count > 0) {
            let i = 0;
            while (i < A.length) {
                if (A[i] < A[i + 1]) {
                    let temp = A[i];
                    A[i] = A[i + 1];
                    A[i + 1] = temp;
                }
                i++;
            }
            count--;
        }
        let index = A.length - B;
        return A[A.length - B];
    },
};
