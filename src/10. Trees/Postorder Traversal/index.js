// Postorder Traversal
// Problem Description

// Given a binary tree, return the Postorder traversal of its nodes values.

// NOTE: Using recursion is not allowed.



// Problem Constraints
// 1 <= number of nodes <= 105



// Input Format
// First and only argument is root node of the binary tree, A.



// Output Format
// Return an integer array denoting the Postorder traversal of the given binary tree.



// Example Input
// Input 1:

//    1
//     \
//      2
//     /
//    3
// Input 2:

//    1
//   / \
//  6   2
//     /
//    3


// Example Output
// Output 1:

//  [3, 2, 1]
// Output 2:

//  [6, 3, 2, 1]


// Example Explanation
// Explanation 1:

//  The Preoder Traversal of the given tree is [3, 2, 1].
// Explanation 2:

//  The Preoder Traversal of the given tree is [6, 3, 2, 1].


// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
    //param A : root node of tree
    //return a array of integers
    postorderTraversal: function (A) {
        let ans = [];
        this.recursive(A, ans);
        return ans;
    },
    recursive: function (node, ans) {
        if (!node) { return; };

        this.recursive(node.left, ans);
        this.recursive(node.right, ans);
        ans.push(node.data);
    }
};
