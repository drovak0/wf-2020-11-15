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
    // creating object from queue element
    const qElement = new QElement(element, priority)
    let queued = false

    // iterating through the entire
    // item array to add element at the
    // correct location of the Queue
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        // Insert new item before the first item whose priority number is larger
        // smaller priority numbers are first
        this.items.splice(i, 0, qElement)
        queued = true
        break
      }
    }

    // if the element has the lowest priority (lower number is higher priority)
    // it is added at the end of the queue
    if (queued === false) {
      this.items.push(qElement)
    }
    return this.items.length
  }

  /**
   * Removes and returns the most prioritized item.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @return {QElement|undefined}.
   */
  dequeue() {
    return this.items.shift()
  }
}

const pq = new PriorityQueue()
pq.enqueue('chris', 1)
pq.enqueue('another', 2)
pq.enqueue('something', 1)

console.log(`pq.items: `, JSON.stringify(pq.items)); // ['chris', 'something', 'another']

console.log(pq.dequeue()) // 'chris'


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
