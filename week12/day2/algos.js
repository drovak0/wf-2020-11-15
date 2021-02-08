// - A Queue is a FIFO (First in First Out) data structure
// - Design a class to represent a queue using an array to store the items.
// - Recreate the queue class using a singly linked list to store the items.
// - Create these methods for each classes:
//   - [x] enqueue (add item, return new size)
//   - [x] dequeue (remove and return item)
//   - [ ] isEmpty
//   - [ ] size
//   - [ ] front (return first item without removing)


class Queue {
  constructor() {
    // 0 is the front
    // arr.length-1 is the back
    this.items = []
    // this.items = new SinglyLinkedList()
  }

  enqueue (val) {
    this.items.push(val)
    // this.items.insertAtBack(val)
    return this.items.length
  }

  dequeue () {
    // store first value
    return this.items.shift()
  }

  isEmpty () {
    return this.items.length === 0 ? true : false
  }

  size () {
    return this.items.length
    // return this.items.size()
  }

  front () {
    return this.items[0]
    // return this.items.head.data
  }

}

const q = new Queue

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.items) // [1,2,3]
console.log(q.dequeue()) // 1
console.log(q.items) // [2,3]
console.log(q.isEmpty()) // false
console.log(q.size()) // 2
console.log(q.front()) // 2
