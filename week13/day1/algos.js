class Node {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     */
    this.left = null
    this.right = null
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     */
    this.root = null
  }

  /**
   * Determines if this tree is empty.
   * @return {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    if (this.root === null) {
      return true
    }
    return false
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserve
   * the order of this tree.
   * @param {number} newVal The data to be added to a new node.
   * @return {BinarySearchTree} This tree.
   */
  insert(newVal) {
    // check if empty
    if (this.isEmpty()) {
      // if empty return tree
      this.root = new Node(newVal)
      return this
    }
    // else
    // traverse through tree
    // track a current
    let current = this.root
    // while loop
    while (current !== null) {
      // check if current value is less or greater
      if (newVal < current.data) {
        // move left or right through tree
        if (current.left === null) {
          current.left = new Node(newVal)
          return this
        } else {
          current = current.left
        }
      } else if (newVal > current.data) {
        if (current.right === null) {
          current.right = new Node(newVal)
          return this
        } else {
          current = current.right
        }
      } else {
        console.log("must be equal")
      }
    }
    return this
    // create new node and add to tree
    // return tree
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @return {BinarySearchTree} This tree.
   */
  insertRecursive(newVal, current = this.root) {
    if (this.root === null) {
      // if empty return tree
      this.root = new Node(newVal)
      return this
    }
    // check if current value is less or greater
    if (newVal < current.data) {
      // move left or right through tree
      if (current.left === null) {
        current.left = new Node(newVal)
        return this
      } else {
        // current = current.left
        return this.insertRecursive(newVal, current.left)
      }
    } else if (newVal > current.data) {
      if (current.right === null) {
        current.right = new Node(newVal)
        return this
      } else {
        // current = current.right
        return this.insertRecursive(newVal, current.right)
      }
    } else {
      console.log("must be equal")
    }
    return this
  }
}

// 1
/*
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/

// [ ] - create a tree
const bst = new BinarySearchTree()
// [ ] - test insert()
console.log(bst.isEmpty())
bst.insertRecursive(6)
bst.insertRecursive(5)
bst.insertRecursive(8)
bst.insertRecursive(3)
bst.insertRecursive(10)
bst.insertRecursive(1)
// bst.insert(6)
// bst.insert(5)
// bst.insert(8)
// bst.insert(3)
// bst.insert(10)
// bst.insert(1)
console.log(JSON.stringify(bst))
// [ ] - test isEmpty()
console.log(bst.isEmpty())

let ex = {
  root: {
    data: 6,
    left: {
      data: 5,
      left: {
        data: 3,
        left: { data: 1, left: null, right: null },
        right: null,
      },
      right: null,
    },
    right: {
      data: 8,
      left: null,
      right: { data: 10, left: null, right: null },
    },
  },
}

// let ex = {
//   root: {
//     data: 6,
//     left: {
//       data: 5,
//       left: {
//         data: 3,
//         left: { data: 1, left: null, right: null },
//         right: null,
//       },
//       right: null,
//     },
//     right: {
//       data: 8,
//       left: null,
//       right: { data: 10, left: null, right: null },
//     },
//   },
// }
