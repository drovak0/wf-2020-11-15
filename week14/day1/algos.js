/**
 * Class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class Node {
  /**
   * Constructs a new Node instance. Executed when the 'new' keyword is used.
   * @param {any} data The data to be added into this new instance of a Node.
   *    The data can be anything, just like an array can contain strings,
   *    numbers, objects, etc.
   * @return {Node} This new Node instance is returned automatically without
   *    having to be explicitly written (implicit return).
   */
  constructor(data) {
    this.data = data
    /**
     * This property is used to link this node to whichever node is next
     * in the list. By default, this new node is not linked to any other
     * nodes, so the setting / updating of this property will happen sometime
     * after this node is created.
     */
    this.next = null
  }
}

/**
 * Class to represent a list of linked nodes. Nodes CAN be linked together
 * without this class to form a linked list, but this class helps by providing
 * a place to keep track of the start (head) of the list at all times and as a
 * place to add methods (functions inside an object) so that every new
 * linked list that is instantiated will inherit helpful the same helpful
 * methods, just like every array you create inherits helpful methods.
 */
class SinglyLinkedList {
  /**
   * Constructs a new instance of an empty linked list that inherits all the
   * methods.
   * @return {SinglyLinkedList} The new list that is instantiated is implicitly
   *    returned without having to explicitly write "return".
   */
  constructor() {
    this.head = null
  }

  /**
   * Determines if this list is empty.
   * @return {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null
  }

  /**
   * Creates a new node and adds it at the front of this list.
   * @param {any} data The data for the new node.
   * @return {DoublyLinkedList} This list.
   */
  insertAtFront(data) {
    const newHead = new Node(data)
    newHead.next = this.head
    this.head = newHead
    return this
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * @param {any} data The data for the new node.
   * @return {DoublyLinkedList} This list.
   */
  insertAtBack(data) {
    if (this.isEmpty()) {
      this.head = new Node(data)
    } else {
      let runner = this.head
      while (runner.next !== null) runner = runner.next

      runner.next = new Node(data)
    }
  }

  removeVal(val) {
    if (this.isEmpty()) {
      return false
    }

    if (this.head.data === val) {
      this.head = this.head.next
      return true
    }

    let runner = this.head

    while (runner.next && runner.next.data !== val) {
      runner = runner.next
    }

    if (runner.next && runner.next.data === val) {
      runner.next = runner.next.next
      return true
    }
    return false
  }

  /**
   * Reverses this list in-place without using any extra lists.
   * @return {SinglyLinkedList} This list.
   */
  reverse() {
    if (!this.head || !this.head.next) {
      return this
    }

    // temp variable -> swap
    let current = this.head // 👇
    let temp = null // ☝️
    //    👇
    // ->(a)->  (b)->(c)
    //          ☝️
    // ->(a)->(c)
    //         (b)->(a)
    // ->(b)->(a)->(c)

    // ->(c)->(b)->(a)
    while (current.next !== null) {
      // give temp the last value
      temp = current.next
      // swap temp and the head
      current.next = current.next.next
      temp.next = this.head
      this.head = temp
    }

    return this
  }

  /**
   * Removes all the nodes that have a negative integer as their data.
   * @return {SinglyLinkedList} This list after the negatives are removed.
   */
  removeNegatives() {
    if (this.isEmpty()) {
      return this
    }

    //    👇
    // ->(-1)->(-2)->(9)->(10)->(-8)->

    // ->(9)->(10)->
    let runner = this.head
    while (runner) {
      // find a negative
      if (runner.data < 0) {
        this.removeVal(runner.data)
      }
      runner = runner.next
    }
    return this
  }

  /**
   * Determines whether the list has a loop in it which would result in
   * infinitely traversing unless otherwise avoided. A loop is when a node's
   * next points to a node that is behind it.
   * @return {boolean} Whether the list has a loop or not.
   */
  hasLoop() {
    // ->(-1)->(-2)->(9)->(10)->(-8)->this.head
    // ->(-1)->(-2)->(9)->(10)->(-2)->
    // -2 === -2
    // (-2)-> === (-2)->

    let runner = this.head
    let fasterRunner = this.head

    while (fasterRunner && fasterRunner.next) {
      runner = runner.next
      fasterRunner = fasterRunner.next.next
      if (runner === fasterRunner) {
        return true
      }
    }
    return false
  }
}


const list = new SinglyLinkedList()
// list.insertAtBack('a')
// list.insertAtBack('b')
// list.insertAtBack('c')
// ->(-1)->(-2)->(9)->(10)->(-8)->
// list.insertAtBack(-1)
// list.insertAtBack(-2)
// list.insertAtBack(9)
// list.insertAtBack(10)
// list.insertAtBack(-8)
// ->(-1)->(-2)->(9)->(10)->(-8)->this.head
// ->(-1)->(-2)->(9)->(10)->(-2)->
list.insertAtBack(-1)
list.insertAtBack(-2)
list.insertAtBack(9)
list.insertAtBack(10)
list.insertAtBack(-8)
list.head.next.next.next.next = list.head
// console.log(JSON.stringify(list))
// list.reverse()
// list.removeNegatives()
console.log(list.hasLoop())
// console.log(JSON.stringify(list))
