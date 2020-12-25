// Maximum Unsorted Subarray
// Problem Description

// Given an array A of non-negative integers of size N. Find the minimum sub-array Al, Al+1 ,..., Ar such that if we sort(in ascending order) that sub-array, then the whole array should get sorted. If A is already sorted, output -1.



// Problem Constraints
// 1 <= N <= 1000000
// 1 <= A[i] <= 1000000



// Input Format
// First and only argument is an array of non-negative integers of size N.



// Output Format
// Return an array of length 2 where First element denotes the starting index(0-based) and second element denotes the ending index(0-based) of the sub-array. If the array is already sorted, return an array containing only one element i.e. -1.



// Example Input
// Input 1:

// A = [1, 3, 2, 4, 5]
// Input 2:

// A = [1, 2, 3, 4, 5]


// Example Output
// Output 1:

// [1, 2]
// Output 2:

// [-1]


// Example Explanation
// Explanation 1:

// If we sort the sub-array A1, A2, then the whole array A gets sorted.
// Explanation 2:

// A is already sorted.




// Approch
// sort and compare sorted and input array

module.exports = {
    //param A : array of integers
    //return a array of integers
    subUnsort: function (A) {
        let sortedArr = [...A];
        sortedArr.sort(function (a, b) { return a - b; });
        let i = 0;
        let j = A.length - 1;
        while (j - i > 0) {
            if (sortedArr[i] === A[i]) {
                i++;
            }
            if (sortedArr[j] === A[j]) {
                j--;
            }
            if (sortedArr[i] !== A[i] && sortedArr[j] !== A[j]) {
                return [i, j];
            }
        }
        return [-1];
    }
};
