// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    return recursive(null, head);
};

let recursive = function (prev, curr) {
    if (curr === null) return prev;
    let next = curr.next;
    curr.next = prev;
    return recursive(curr, next);
};

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
