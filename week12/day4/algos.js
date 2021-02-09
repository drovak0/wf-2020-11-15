class Queue {
  constructor() {
    this.items = []
  }

  sumOfHalvesEqual() {
    // - sumOfHalvesEqual
    //   - Create a method on the array Queue class that returns whether or not the sum of the first half of the queue is equal to the sum of the second half
    //   - DO NOT manually index the queue items via bracket notation, only use the provided queue methods, use no additional arrays or objects for storage.
    //   - Restore the queue to it's original state before returning.

    // - [ ] code here
  }
}

// - TwoStackQueue

// Import our stack data structure to use in this file.
const Stack = require("./Stack");
// Or add the code here yani

class Stack {
  constructor() {
    this.items = []
  }
  // plus methods
}

/**
 * Class to represent a Queue but is implemented using two stacks to store the
 * queued items without using any other objects or arrays to store the items.
 * Retains the FIFO (First in First Out) ordering when adding / removing items.
 */
class TwoStackQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  /**
   * Adds a new item to the back of the queue.
   * @param {any} item To be added.
   * @return {number} The new number of items in the queue.
   */
  enqueue(item) {
    // - [ ] code here
  }

  /**
   * Removes the next item in the line / queue.
   * @return {any} The removed item.
   */
  dequeue() {
    // - [ ] code here
  }
}