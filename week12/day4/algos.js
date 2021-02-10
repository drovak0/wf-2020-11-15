class Queue {
  constructor() {
    this.items = []
    // this.items = new SinlyLinkedList()
  }

  enqueue(val) {
    this.items.push(val)
    // this.items.insertAtBack(val)
    return this.items.length
  }

  dequeue() {
    // store first value
    return this.items.shift()
  }

  size() {
    return this.items.length
  }

  sumOfHalvesEqual() {
    // - sumOfHalvesEqual
    //   - Create a method on the array Queue class that returns whether or not the sum of the first half of the queue is equal to the sum of the second half
    //   - DO NOT manually index the queue items via bracket notation, only use the provided queue methods, use no additional arrays or objects for storage.
    //   - Restore the queue to it's original state before returning.
    // - [ ] code here

    // what if queue is odd number?
    // [1,2,3,   4     ,5,6,7]
    let length = this.size()
    if (length % 2 != 0) return false

    // sum both halfs
    // set up
    let sumHalf1 = 0
    let sumHalf2 = 0
    let half = length/2

    // repeat
    while(length > 0) {
      let dequeued = this.dequeue()

      if (length > half) {
        sumHalf1 += dequeued
      } else {
        sumHalf2 += dequeued
      }

      this.enqueue(dequeued)
      length--

      console.log(`sumHalf1: `, sumHalf1);
      console.log(`sumHalf2: `, sumHalf2);
    }

    // clean up
    return sumHalf1 === sumHalf2

  }
}

// const q = new Queue()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// // q.enqueue(3)

// q.enqueue(3)
// q.enqueue(2)
// q.enqueue(1)

// console.log(q.sumOfHalvesEqual())


// - TwoStackQueue

// Import our stack data structure to use in this file.
// const Stack = require("./Stack")
// Or add the code here yani

class Stack {
  constructor() {
    this.items = []
  }
  // plus methods
  push(x) {
    this.items[this.items.length] = x
    // this.items.push(x)
    console.log("push: ", this.items.length)
    return this.size()
  }

  pop() {
    if (this.isEmpty() === false) {
      var last = this.items[this.items.length - 1]
      console.log(last)
      this.items.length = this.items.length - 1
      // console.log(this.items);
      console.log("pop: ", last)
      return last
    }
    return undefined
  }

  size() {
    console.log(`size: `, this.items.length)

    return this.items.length
  }

  isEmpty() {
    console.log("isEmpty: ", this.items.length === 0 ? true : false)
    return this.items.length === 0 ? true : false
  }
}

/**
 * Class to represent a Queue but is implemented using two stacks to store the
 * queued items without using any other objects or arrays to store the items.
 * Retains the FIFO (First in First Out) ordering when adding / removing items.
 */
class TwoStackQueue {
  constructor() {
    // main stack
    this.stack1 = new Stack()

    // secondary stack
    this.stack2 = new Stack()
  }

  /**
   * Adds a new item to the back of the queue.
   * @param {any} item To be added.
   * @return {number} The new number of items in the queue.
   */
  enqueue(item) {
    // - [ ] code here
    this.stack1.push(item)
    return this.stack1.size()
  }

  /**
   * Removes the next item in the line / queue.
   * @return {any} The removed item.
   */
  dequeue() {
    // - [ ] code here

    console.log(`this.stack1: `, this.stack1);
    console.log(`this.stack2: `, this.stack2);

    // transfer items from stack 1 to stack 2
    let length = this.stack1.size()
    while(length > 0) {
      const temp = this.stack1.pop()
      this.stack2.push(temp)
      length--
    }

    console.log(`this.stack1: `, this.stack1)
    console.log(`this.stack2: `, this.stack2)

    // pop dequeued item from stack 2
    const dequeued = this.stack2.pop()

    // transfer items from stack 2 to stack 1
    length = this.stack2.size()
    while (length > 0) {
      const temp = this.stack2.pop()
      this.stack1.push(temp)
      length--
    }

    console.log(`this.stack1: `, this.stack1)
    console.log(`this.stack2: `, this.stack2)
    // return the dequeued item
    return dequeued
  }
}

// stack 1    stack 2
// 3            1
// 2            2
// 1            3

// dequeue
// 1

const twoStackQ = new TwoStackQueue()

twoStackQ.enqueue(1)
twoStackQ.enqueue(2)
twoStackQ.enqueue(3)

console.log(twoStackQ.dequeue())
