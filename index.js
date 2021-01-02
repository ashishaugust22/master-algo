let ll = {
    "data": 2735,
    "next": {
        "data": 1088,
        "next": {
            "data": 6362, "next": null
        }
    }
};


let solve = function (A) {
    let fastPointer = A;
    let slowPointer = A;

    // loop through the linked list
    // when fastPointer reaches the end of the list
    // then slowPointer will be at the middle node
    debugger;
    while (fastPointer.next !== null && fastPointer.next.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }

    // slowPointer is now at the middle node in the linked list
    slowPointer;
};
// let recursive = function (slowNode, fastNode) {
//     if (!fastNode.next) {
//         // when fastpointer is at last node
//         return slowNode;
//     }
//     if (!fastNode.next.next) {
//         // when fast pointer is at second last node
//         // also denotes length is not even
//         slowNode = slowNode.next;
//         return slowNode;
//     }

//     return recursive(slowNode.next, fastNode.next.next);
// };


console.log(solve(ll));