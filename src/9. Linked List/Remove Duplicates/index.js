// Remove Duplicates from Sorted List
// Problem Description

// Given a sorted linked list, delete all duplicates such that each element appear only once.



// Problem Constraints
// 0 <= length of linked list <= 106



// Input Format
// First argument is the head pointer of the linked list.



// Output Format
// Return the head pointer of the linked list after removing all duplicates.



// Example Input
// Input 1:

//  1->1->2
// Input 2:

//  1->1->2->3->3


// Example Output
// Output 1:

//  1->2
// Output 2:

//  1->2->3


// Example Explanation
// Explanation 1:

//  Each element appear only once in 1->2.



// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
    //param A : head node of linked list
    //return the head node in the linked list
    deleteDuplicates: function (A) {
        let curr = A;
        while (curr && curr.next) {
            if (curr.data === curr.next.data) {
                if (curr.next.next) {
                    curr.next = curr.next.next;
                } else {
                    curr.next = null;
                }
            } else {
                curr = curr.next;
            }
        }
        return A;
    }
};
