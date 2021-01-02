class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
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
            while (curr_index === index) {
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
        return 'not implemented';
    };
    removeElement = function (element) {
        return 'not implemented';
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




// linked list to test code

let ll = {
    "data": 1,
    "next": {
        "data": 2,
        "next": {
            "data": 3,
            "next": {
                "data": 4,
                "next": {
                    "data": 5,
                    "next": null
                }
            }
        }
    }
};