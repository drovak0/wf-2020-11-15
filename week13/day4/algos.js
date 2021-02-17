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
   * Recursively counts the total number of nodes in this tree.
   * @param {Node} node The current node during the traversal of this tree.
   * @return {number} The total number of nodes.
   */
  size(node = this.root) {
    // base case
    if (node === null) return 0
    // forward movement
    // if left && right not === null increase count
    return this.size(node.left) + this.size(node.right) + 1
  }

  /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * @param {Node} node The current node during traversal of this tree.
   * @return {number} The height of the tree.
   */
  height(node = this.root) {
    // if (this.isEmpty()) return 0

    // let count = 0

    // while (node !== null) {
    //   if (node.right !== null) count++
    //   if (node.left !== null) count++
    // }
    // base case
    if (node === null) return 0
    // forward movement
    return 1 + Math.max(this.height(node.left), this.height(node.right))
  }

  /**
   * Determines if this tree is a full tree. A full tree is a tree where every
   * node has both a left and a right except for the leaf nodes (last nodes)
   * @param {Node} node The current node during traversal of this tree.
   * @return {boolean} Indicates if this tree is full.
   */
  isFull(node = this.root) {
    // base case for root
    if (node === null) {
      return false
    }
    // leaf node
    // check for both left and right
    if (node.left === null && node.right === null) {
      return true
    }
    // node with both sides
    // forward movement
    if (node.left !== null && node.right !== null) {
      return this.isFull(node.left) && this.isFull(node.right)
    }
    return false
  }

  /*
                        root
                    <-- 25 -->
                  /            \
                15             50
              /    \         /    \
            10     22      35     70
          /   \   /  \    /  \   /  \
        4    12  18  24  31  44 66  90
      /   \
    2       3
  */
}

const bts = new BinarySearchTree()
bts.insert(10)
bts.insert(8)
bts.insert(15)
// bts.insert(3)
// bts.insert(1)
// bts.insert(9)
console.log(bts.size())
console.log(bts.height())
console.log(JSON.stringify(bts))
console.log(bts.isFull())

const data = {
  root: {
    data: 10,
    left: {
      data: 8,
      left: {
        data: 3,
        left: { data: 1, left: null, right: null },
        right: null,
      },
      right: { data: 9, left: null, right: null },
    },
    right: { data: 15, left: null, right: null },
  },
}

const data2 = {
  root: {
    data: 10,
    left: { data: 8, left: null, right: null },
    right: { data: 15, left: null, right: null },
  },
}