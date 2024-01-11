// Link: https://www.educative.io/module/page/GZjlABC2Bv5MjMmmj/10370001/6201670262063104/6278583169056768

// Statement#
// Given a singly linked list, remove the nth node from the end of the list and return its head.


function removeNthLastNode(head, n) {
    let timesMoved = 0;
    let left = head;
    let right = head;
    for (let i = 0; i < n; i++) {
        if (right.next) {
            right = right.next;
        }
    }

    while (right.next) {
        right = right.next;
        left = left.next;
        timesMoved++;
    }

    if (timesMoved > 0) {
        left.next = left.next.next;
    } else {
        head = head.next;
    }

    return head;
}

removeNthLastNode({}, 0);