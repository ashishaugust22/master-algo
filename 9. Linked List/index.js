class Node {
    constructor (element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    add = function (element) {
        let node = new Node(element);

        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    };
    insertAt = function (element, index) {
        if (index > 0 && index > this.size) return false;

        let node = new Node(element);
        let curr_index = 0;

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let previous;
            while (curr_index !== index) {
                curr_index++;
                previous = current;
                current = current.next;
            }
            previous.next = node;
            node.next = current;
        }
        this.size++;
    };

    removeFrom = function (index) {
        if (index > 0 && index > this.size) return false;

        let curr_index = 0;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let previous;
            while (curr_index !== index) {
                curr_index++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    };
    removeElement = function (element) {
        let current = this.head;
        let previous;
        while (current.element !== element) {
            previous = current;
            current = current.next;
        }
        if (current) {
            previous.next = current.next;
        }
        this.size--;
    };


    //Helper Methods
    indexOf = function (element) {
        return 'not implemented';
    };
    isEmpty = function () {
        return this.size === 0 ? true : false;
    };
    size_of_list = function () {
        return this.size;
    };
    printList = function () {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    };

}


let linkedList = new LinkedList();

for (let i = 0; i < 10; i++) {
    linkedList.add(i);
}

linkedList.printList();
