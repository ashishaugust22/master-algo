/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    let head = null;
    let size = 0;
};

let Node = function (el) {
    let element = el;
    let next = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (this.head === null) return -1;
    let current = this.head;
    let count = 0;
    while (current.next) {
        if (count === index) return current.element;
        current = current.next;
        count++;
    }
    return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = new Node(val);

    if (!this.head) {
        this.head = node;
        return;
    }
    let current = this.head;
    while (current.next) {
        current = current.next;
    }
    current.next = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let node = new Node(val);
    if (index === 0) {
        node.next = this.head;
        this.head = node;
    } else if (index > this.size) {
        return;
    } else {
        let current = this.head;
        let prev;
        let count = 0;
        while (current.next) {
            if (count === index) {
                prev.next = node;
                node.next = current;
            }
            prev = current;
            current = current.next;
            count++;
        }
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index > this.size) { return; }
    let current = this.head;
    let prev;
    let count = 0;
    while (count != index) {
        prev = current;
        current = current.next;
        count++;
    }
    prev.next = current.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */