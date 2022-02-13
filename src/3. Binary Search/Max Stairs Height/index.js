// Maximum height of staircase
// Problem Description

// Given an integer A representing the number of square blocks. The height of each square block is 1. The task is to create a staircase of max height using these blocks.

// The first stair would require only one block, the second stair would require two blocks and so on.

// Find and return the maximum height of the staircase.



// Problem Constraints
// 0 <= A <= 109


// Input Format
// The only argument given is integer A.



// Output Format
// Return the maximum height of the staircase using these blocks.



// Example Input
// Input 1:

//  A = 10
// Input 2:

//  20


// Example Output
// Output 1:

//  4
// Output 2:

//  5


module.exports = {
    //param A : integer
    //return an integer
    solve: function (A) {
        let start = 0;
        let end = A;
        let maxH = 0;
        while (end - start >= 0) {
            const height = Math.floor(start + (end - start) / 2);
            let req = height * (height + 1) / 2;
            if (req === A) {
                return height;
            }
            if (req > A) {
                end = height - 1;
            } else {
                maxH = height;
                start = height + 1;
            }
        }
        return maxH;
    }
};
