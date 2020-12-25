

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


let myNotes = new Notes();

console.log(myNotes);
myNotes.addNote = 'test';
console.log(myNotes);
myNotes.addNote = 'test1';