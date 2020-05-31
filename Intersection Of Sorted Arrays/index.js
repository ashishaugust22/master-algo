// Find the intersection of two sorted arrays.
// https://www.interviewbit.com/problems/intersection-of-sorted-arrays/
// OR in other words,
// Given 2 sorted arrays, find all the elements which occur in both the arrays.

// Example :

// Input : 
//     A : [1 2 3 3 4 5 6]
//     B : [3 3 5]

// Output : [3 3 5]

// Input : 
//     A : [1 2 3 3 4 5 6]
//     B : [3 5]

// Output : [3 5]



module.exports = {
    //param A : array of integers
    //param B : array of integers
    //return a array of integers
    intersect: function (a, b) {
        let i = 0;
        let j = 0;
        let maxLen = Math.max(a.length, b.length);
        let ans = [];

        if (!maxLen) return ans;

        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                i++;
            } else if (a[i] > b[j]) {
                j++;
            } else {
                ans.push(a[i]);
                i++;
                j++;
            }
        }
        return ans;
    }
};
