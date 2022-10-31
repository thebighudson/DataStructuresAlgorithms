// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data, children) {
        this.data = data;
        this.children = [];
    }

    add (data) {
        this.children.push(new Node(data));

    }

    remove (data) {
        //user Array filter. Filter returns a new array with the filtered
        //item removed
        this.children = this.children.filter(node => {
            //want to remove every element not equal to the one we want
            return node.data !== data;
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    //Breadth first traversal
    //fn is an iterator function passed in
    traverseBF (fn) {
        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift(); //shift takes out 1st element of array

            //ES2015 feature - spread operator.
            //Acts as if we did a for loop to go over all children
            arr.push(...node.children);
            fn(node);
        }
    }

    //Depth first traversal
    traverseDF (fn) {
        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift();

            //unshift puts items at beginning of array
            arr.unshift(...node.children);
            fn(node);
        }

    }
}

module.exports = { Tree, Node };
