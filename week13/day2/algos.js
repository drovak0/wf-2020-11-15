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
   * Retrieves the smallest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @return {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    // check if tree if empty
    if (this.isEmpty() === true) {
      return null
    }
    // loop all the way down the left side of the tree
    let min = this.root
    while(current !== null) {
      if (current.left === null) {
        min = current
        return min.data
      } else {
        current = current.left
      }
    }
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @return {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    // check if tree if empty
    if (this.isEmpty() === true) {
      return null
    }
    let min = current
    if (current.left !== null) {
      return this.minRecursive(current.left)
    }
    return min.data
  }

  /**
   * Retrieves the largest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @return {number} The largest integer from this tree.
   */
  max(current = this.root) {
    // check if tree if empty
    if (this.isEmpty() === true) {
      return null
    }
    // loop all the way down the right side of the tree
    let max = this.root
    while (current !== null) {
      if (current.right === null) {
        max = current
        return max.data
      } else {
        current = current.right
      }
    }
  }

  /**
   * Retrieves the largest integer data from this tree.
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @return {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    // check if tree if empty
    if (this.isEmpty() === true) {
      return null
    }
    let min = current
    if (current.right !== null) {
      return this.maxRecursive(current.right)
    }
    return min.data
  }
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
*/

const bts = new BinarySearchTree()
bts.insert(2)
bts.insert(3)
bts.insert(4)
bts.insert(1)
bts.insert(5)
bts.insert(6)
// console.log(bts.min())
// console.log(bts.minRecursive())
// console.log(bts.max())
console.log(bts.maxRecursive())