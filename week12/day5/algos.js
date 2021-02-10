// - PriorityQueue (create enqueue and dequeue methods)
//   - Design a new PriorityQueue class where the queue maintains an ascending order when items are added based on a queue item's provided priority integer value. A priority value of 1 is most important which means it should be at the front of the queue, the first to be dequeued.

class QElement {
  constructor(element, priority) {
    // element is the given item to be added to the queue.
    this.element = element
    this.priority = priority
  }
}

/**
 * Class to represent a PriorityQueue with methods that enforce the correct
 * order of queue items.
 */
class PriorityQueue {
  // An array is used to implement priority
  constructor() {
    this.items = []
  }

  /**
   * Adds the new item in the correct location in the queue based on priority.
   * @param {any} element The item to add.
   * @param {number} priority The importance, low is more important.
   * @return {number} The new length.
   */
  enqueue(element, priority) {
    // [ ] code here
  }

  /**
   * Removes and returns the most prioritized item.
   * @return {QElement|undefined}.
   */
  dequeue() {
    // [ ] code here
  }
}

// - LinkedListPriorityQueue

class PriQNode {
  constructor(val, pri) {
    this.val = val
    this.next = null
    this.pri = pri
  }
}

class LinkedListPriorityQueue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue() {
    // [ ] code here
  }

  dequeue() {
    // [ ] code here
  }
}
