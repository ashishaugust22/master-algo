// Middle element of linked list
// Problem Description

// Given a linked list of integers. Find and return the middle element of the linked list.

// NOTE: If there are N nodes in the linked list and N is even then return the (N/2 + 1)th element.



// Problem Constraints
// 1 <= length of the linked list <= 100000

// 1 <= Node value <= 109



// Input Format
// The only argument given head pointer of linked list.



// Output Format
// Return the middle element of the linked list.



// Example Input
// Input 1:

//  1 -> 2 -> 3 -> 4 -> 5
// Input 2:

//  1 -> 5 -> 6 -> 2 -> 3 -> 4


// Example Output
// Output 1:

//  3
// Output 2:

//  2


// Example Explanation
// Explanation 1:

//  The middle element is 3.
// Explanation 2:

//  The middle element in even length linked list of length N is ((N/2) + 1)th element which is 2.

// ==================================================

module.exports = {
    //param A : head node of linked list
    //return an integer
    solve: function (A) {
        let fastPointer = A;
        let slowPointer = A;

        // loop through the linked list
        // when fastPointer reaches the end of the list
        // then slowPointer will be at the middle node
        while (fastPointer.next !== null && fastPointer.next.next !== null) {
            fastPointer = fastPointer.next.next;
            slowPointer = slowPointer.next;
        }

        // slowPointer is now at the middle node in the linked list
        return fastPointer.next ? slowPointer.next.data : slowPointer.data;
    },
};
