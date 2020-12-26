// class declaration
class Notes {
    constructor() {
        this.notes = [];
    }

    get allNotes() {
        return this.notes;
    }

    set addNote(_note) {
        this.notes.push({ id: new Date().toISOString(), note: _note });
    }
}

// class expression
let myNotes = new Notes();

console.log(myNotes);
myNotes.addNote = 'test';
console.log(myNotes);
myNotes.addNote = 'test1';



// ===============================================
//  in class hoisting does not work in a same way
// declare first and then use


const p = new Rectangle(); // ReferenceError

class Rectangle { }


// ===============================================




// Static methods and properties;
// The static keyword defines a static method or property for a class.
// Static members(properties and methods) are called without instantiating their class and 
// cannot be called through a class instance.Static methods are often used to create utility 
// functions for an application, whereas static properties are useful for caches, 
// fixed - configuration, or any other data you don't need to be replicated across instances.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755


// ===============================================