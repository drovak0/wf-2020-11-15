// Singly Linked Lists

// https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/

// Scavenger Hunting

/**
 * Class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class Node {
  constructor(data) {
    this.data = data;
    /**
     * This property is used to link this node to whichever node is next
     * in the list. By default, this new node is not linked to any other
     * nodes, so the setting / updating of this property will happen sometime
     * after this node is created.
     */
    this.next = null;
  }
}

/**
 * Class to represent a list of linked nodes. Nodes CAN be linked together
 * without this class to form a linked list, but this class helps by providing
 * a place to keep track of the start node (head) of the list at all times and
 * as a place to add methods (functions inside an object) so that every new
 * linked list that is instantiated will inherit helpful the same helpful
 * methods, just like every array you create inherits helpful methods.
 */
class SinglyLinkedList {
  constructor() {
    this.head = null
  }

  // Methods are added below the constructor.
  hello() {
    console.log("world")
  }

  // isEmpty
  // Returns whether or not this list is empty.
  isEmpty() {}

  // insertAtBack
  // Creates a new node with the given data and inserts it at the back of this list.
  // like Array.push()
  insertAtBack(data) {}

  // seedFromArr
  // adds all the items from a given array to the back of this list.
  seedFromArr(vals) {}
}

// const emptyList = new SinglyLinkedList();
// const node = new Node('first')
// console.log(emptyList.head)
// emptyList.head = node
// console.log(emptyList.head)
// console.log(emptyList.hello())
// const node2 = new Node('second')

// console.log(emptyList)
// // emptyList.head.next = node2
// node.next = node2
// console.log(emptyList)

// How to iterate through Array?
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }
// How to iterate through LinkedList?

// let runner = emptyList.head
// console.log(runner.data)
// while (runner.next !== null) {
//   runner = runner.next
// }
// console.log(runner.data)

// ************************************************************************************************
