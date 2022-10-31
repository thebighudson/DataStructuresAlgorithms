// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    //constructor automatically called when new Queue() is called
    constructor() {
        this.data = [];
    }

    add(record) {
        // unshift adds record to front of array
        this.data.unshift(record);
    }

    remove() {
        //pop removes it from end of array
        return this.data.pop();
    }

  
}

module.exports = Queue;
