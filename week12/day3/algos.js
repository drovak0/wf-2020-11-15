class Stack {
  constructor() {
    this.items = []
  }
  minStack() {
    // - [ ] minStack
    //   - Design a stack that supports push, pop, top, and min methods where the min method retrieves the minimum int in the stack
    //   - Bonus: retrieve min element in constant time (no looping).
  }

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

  isEmpty() {
    console.log("isEmpty: ", this.items.length === 0 ? true : false)
    return this.items.length === 0 ? true : false
  }

  size() {
    console.log(`size: `, this.items.length)

    return this.items.length
  }
}


class Queue {
  constructor() {
    this.items = []
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
    const stack = new Stack()
    let isPalindrome = true
    let length = this.size()

    // loop through queue
    while(length > 0) {
      // push onto stack
      let dequeued = this.dequeue()
      stack.push(dequeued)
      this.enqueue(dequeued)

      length--
    }
    console.log(`stack: `, stack);
    console.log(`this.items: `, this.items);

    length = this.size()

    while(length > 0) {
      // compare element in queue to element in stack
      // pop from the stack
      let popped = stack.pop()
      // dequeue from the queue
      let dequeued = this.dequeue()

      console.log(`popped: `, popped);
      console.log(`dequeued: `, dequeued);

      if (popped !== dequeued) {
        isPalindrome = false
      }
      this.enqueue(dequeued)
      length--
    }

    console.log(`isPalindrome: `, isPalindrome)
    return isPalindrome
  }
}

const q = new Queue()
// const q2 = new Queue()
// q.compareQueues(q2)

q.enqueue('t')
q.enqueue('a')
q.enqueue('c')
q.enqueue('o')
q.enqueue('c')
q.enqueue('a')
q.enqueue('t')
q.enqueue('z')
q.queueIsPalindrome() // true


