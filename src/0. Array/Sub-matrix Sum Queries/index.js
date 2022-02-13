// Sub-matrix Sum Queries
// Problem Description

// Given a matrix of integers A of size N x M and multiple queries Q, for each query find and return the submatrix sum.

// Inputs to queries are top left (b, c) and bottom right (d, e) indexes of submatrix whose sum is to find out.

// NOTE:

// Rows are numbered from top to bottom and columns are numbered from left to right.
// Sum may be large so return the answer mod 109 + 7.


// Problem Constraints
// 1 <= N, M <= 1000
// -100000 <= A[i] <= 100000
// 1 <= Q <= 100000
// 1 <= B[i] <= D[i] <= N
// 1 <= C[i] <= E[i] <= M



// Input Format
// The first argument given is the integer matrix A.
// The second argument given is the integer array B.
// The third argument given is the integer array C.
// The fourth argument given is the integer array D.
// The fifth argument given is the integer array E.
// (B[i], C[i]) represents the top left corner of the i'th query.
// (D[i], E[i]) represents the bottom right corner of the i'th query.



// Output Format
// Return an integer array containing the submatrix sum for each query.



// Example Input
// Input 1:

//  A = [   [1, 2, 3]
//          [4, 5, 6]
//          [7, 8, 9]   ]
//  B = [1, 2]
//  C = [1, 2]
//  D = [2, 3]
//  E = [2, 3]
// Input 2:

//  A = [   [5, 17, 100, 11]
//          [0, 0,  2,   8]    ]
//  B = [1, 1]
//  C = [1, 4]
//  D = [2, 2]
//  E = [2, 4]


// Example Output
// Output 1:

//  [12, 28]
// Output 2:

//  [22, 19]


// Example Explanation
// Explanation 1:

//  For query 1: Submatrix contains elements: 1, 2, 4 and 5. So, their sum is 12.
//  For query 2: Submatrix contains elements: 5, 6, 8 and 9. So, their sum is 28.
// Explanation 2:

//  For query 1: Submatrix contains elements: 5, 17, 0 and 0. So, their sum is 22.
//  For query 2: Submatrix contains elements: 11 and 8. So, their sum is 19.



module.exports = {
    //param A : array of array of integers
    //param B : array of integers
    //param C : array of integers
    //param D : array of integers
    //param E : array of integers
    //return a array of integers
    solve: function (A, B, C, D, E) {
        let processedMat = this.preProcess(A);
        let result = [];

        for (let i = 0; i < B.length; i++) {
            result[i] = this.sumQuery(processedMat, B[i] - 1, C[i] - 1, D[i] - 1, E[i] - 1);
        }
        return result;
    },
    preProcess: function (inputMat) {
        let processedMat = [];
        let row = inputMat.length;
        let col = inputMat[0].length;
        let modulo = 1000000007;

        for (let i = 0; i < inputMat.length; i++) {
            processedMat[i] = new Array(inputMat[i].length).fill(0);
        }

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                processedMat[i][j] = inputMat[i][j];
                if (j > 0) {
                    processedMat[i][j] = (processedMat[i][j] + processedMat[i][j - 1] + modulo) % modulo;
                }
                if (i > 0) {
                    processedMat[i][j] = (processedMat[i][j] + processedMat[i - 1][j] + modulo) % modulo;
                }
                if (i > 0 && j > 0) {
                    processedMat[i][j] = (processedMat[i][j] - processedMat[i - 1][j - 1] + modulo) % modulo;
                }
            }
        }
        return processedMat;
    },
    sumQuery: function (processedMat, i, j, k, l) {
        let sum = processedMat[k][l];
        let modulo = 1000000007;

        if (i > 0) {
            sum = (sum - processedMat[i - 1][l] + modulo) % modulo;
        }

        if (j > 0) {
            sum = (sum - processedMat[k][j - 1] + modulo) % modulo;
        }

        if (i > 0 && j > 0) {
            sum = (sum + processedMat[i - 1][j - 1] + modulo) % modulo;
        }
        return sum;
    },
};





// learnings: 
// 1. Modulo concept
// 2. Matrix mathematics