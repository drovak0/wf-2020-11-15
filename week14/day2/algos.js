// - A Doubly Linked List is a singly linked list with the added functionality of being able to traverse in both directions.
// - Since you can traverse forwards or backwards, that means you should be able to start at the head or tail (end). After creating the necessary classes, then build the following methods:
// - Create the node class that allows for forwards and backwards traversal.
// - insertAtFront
//   - Given some new data, add it as the new head
// - insertAtBack
//   - Given some new data, add it to the back of the DList
// - removeMiddleNode

class Node {
  // Create the node class that allows for forwards & backwards traversal.
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

/**
 * Class to represent a doubly linked list. Nodes can be linked together
 * WITHOUT this class to form a list, but the class is helpful to give all
 * doubly linked lists access to the same helpful methods for consistency
 * and to always keep track of the head and the tail nodes.
 *
 * Unlike a singly linked list, a doubly linked list allows you to traverse
 * backwards as well.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    // The list is empty to start.
    this.head = null
    this.tail = null
  }

  /**
   * Determines if this list is empty.
   * @return {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @return {DoublyLinkedList} This list.
   */
  seedFromArr(items = []) {
    items.forEach((item) => this.insertAtBack(item))
    return this
  }

  /**
   * Creates a new node and adds it at the front of this list.
   * @param {any} data The data for the new node.
   * @return {DoublyLinkedList} This list.
   */
  insertAtFront(data) {}

  /**
   * Creates a new node and adds it at the back of this list.
   * @param {any} data The data for the new node.
   * @return {DoublyLinkedList} This list.
   */
  insertAtBack(data) {}

  // EXTRA
  /**
   * Removes the middle node in this list.
   * @return {any} The data of the removed node.
   */
  removeMiddleNode() {}
}

const emptyList = new DoublyLinkedList()
