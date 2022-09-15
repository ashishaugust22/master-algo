// https://leetcode.com/problems/lru-cache/

/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.list = new DoublyLinkedList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let node = this.map.get(key);
    
    // if key doesn't exist, return -1
    if(!node) return -1;
    
    // if node exists
    // move to front
    // & return its value
    this.list.moveToFront(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map.get(key, value);
    
    // if key exists
    // move to front and update its value
    if(node){
        node.value = value;
        this.list.moveToFront(node);
        return;
    }
    
    // if cache is full
    // remove node from tail
    if(this.map.size === this.capacity){
        const lastNode = this.list.removeFromTail();
        this.map.delete(lastNode.key);
    }
    node = new ListNode(key, value);
    this.list.add(node);
    this.map.set(key,node);
    return;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


class DoublyLinkedList{
    constructor (key, val) {
        this.head = new ListNode();
        this.tail = new ListNode();
        this.connect(this.head, this.tail);
    }
    
    connect(node1, node2){
        node1.next = node2;
        node2.prev = node1
    }
    
    moveToFront(node){
        this.delete(node);
        this.add(node);
    }
    
    removeFromTail(){
        const node = this.tail.prev;
        this.delete(node);
        return node;
    }
    
    add(node){
        this.connect(node, this.head.next);
        this.connect(this.head, node);
    }
    
    delete(node){
        this.connect(node.prev, node.next);
    }
}

class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}