// Singly Linked Lists

// https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/

// Scavenger Hunting

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
  }

  isEmpty() {
    if (this.head === null) {
      return true
    } else {
      return false
    }
  }

  insertAtBack(data) {
    // if list is empty
    // add to head
    if (this.isEmpty()) {
      this.head = new Node(data)
    } else {
      // go to the end of the list
      let runner = this.head
      // do this until runner.next === null
      while (runner.next !== null) runner = runner.next

      runner.next = new Node(data)
    }
  }

  seedFromArr(vals) {
    // for loop through array
    for (var i = 0; i < vals.length; i++) {
      // insert at back
      this.insertAtBack(vals[i])
    }
    console.log(JSON.stringify(this.head))
  }
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

const single = new SinglyLinkedList()
// console.log(single.isEmpty())

// single.insertAtBack(1)
// single.insertAtBack(2)
// single.insertAtBack(3)
// console.log(single)
// console.log(single.isEmpty())
// {
//   head: {
//     data: 1,
//     next: {
//       data: 2,
//       next: null
//     }
//   }
// }

single.seedFromArr([1, 2, 3, 4, 5, 6, 7, 8, 9])

// {"data":1,"next":{"data":2,"next":{"data":3,"next":{"data":4,"next":{"data":5,"next":{"data":6,"next":{"data":7,"next":{"data":8,"next":{"data":9,"next":null}}}}}}}}}