// https://leetcode.com/problems/intersection-of-two-linked-lists/

// 160. Intersection of Two Linked Lists


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
let getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let r1 = headA;
    let r2 = headB;
    while (r1 !== r2) {
        r1 = r1.next;
        r2 = r2.next;
        if (r1 === r2) {
            return r1;
        }
        if (r1 === null) {
            r1 = headB;
        }
        if (r2 === null) {
            r2 = headA;
        }
    }
    return r1;
};