// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let current_1 = l1;
    let current_2 = l2;
    let ans;
    let carry = 0;
    do {
        let val_1 = current_1.val || 0;
        let val_2 = current_2.val || 0;
        let sum = val_1 + val_2 + carry;
        carry = 0;
        if (sum > 9) {
            carry = Math.trunc(sum / 10);
            let remainder = sum % 10;
            ans = addAtTail(ans, remainder);
        } else {
            ans = addAtTail(ans, sum);
        }
        if (current_1.next) {
            current_1 = current_1.next;
        } else {
            current_1.val = undefined;
        }
        if (current_2.next) {
            current_2 = current_2.next;
        } else {
            current_2.val = undefined;
        }
    } while ((current_1 && current_1.val !== undefined) || (current_2 && current_2.val !== undefined));

    if (carry) {
        ans = addAtTail(ans, carry);
    }

    return ans;
};

let Node = function (val) {
    this.val = val;
    this.next = null;
};

let addAtTail = function (ans, digit) {
    if (!ans) {
        ans = new Node(digit);
    } else {
        let curr = ans;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = new Node(digit);
    }
    return ans;
};








