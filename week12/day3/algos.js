class Queue {
  constructor() {
    this.items = []
  }

  compareQueues(q) {
    // - [ ] compareQueues
    //   - Write a method on the Queue class that, given another queue, will return whether they are equal (same items in same order).
    //   - Use ONLY the provided queue methods, do not manually index the queue items via bracket notation, use no extra array or objects.
    //   - Restore the queues to their original state
    this.dequeue()
    q.dequeue()
  }

  queueIsPalindrome() {
    // - [ ] queueIsPalindrome
    //   - Write a method on the Queue class that returns whether or not the queue is a palindrome
    //   - Use only 1 stack as additional storage (no additional arrays / objects).
    //   - Do not manually index the queue via bracket notation, use the provided queue methods and stack methods, restore the queue to original order when done.
    const s = new Stack()
    // this.dequeue()

  }
}

const q1 = new Queue()
const q2 = new Queue()

q1.compareQueues(q2)

class Stack {
  constructor() {
    this.items = []
  }
  minStack() {
    // - [ ] minStack
    //   - Design a stack that supports push, pop, top, and min methods where the min method retrieves the minimum int in the stack
    //   - Bonus: retrieve min element in constant time (no looping).
  }
}
