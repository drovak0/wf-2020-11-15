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

  /**
   * Determines whether or not the given search value exists in this list.
   * @param {any} val The data to search for in the nodes of this list.
   * @return {boolean}
   */
  contains(val) {
    // define current / runner
    let runner = this.head
    // loop through list
    while (runner !== null) {
      // if value of each node
      if (runner.data === val) {
        return true
      }
      runner = runner.next
    }
    return false
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?node} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @return {boolean}
   */
  containsRecursive(val, current = this.head) {
    // base case(s)
    if (current === null) {
      return false
    }

    if (current.data === val) {
      return true
    }

    // forward movement
    return this.containsRecursive(val, current.next)
  }

  /**
   * Removes the last node of this list.
   * @return {any} The data from the node that was removed.
   */
  removeBack() {
    // check if list empty
    if (this.head === null) {
      return null
    }
    // define a runner
    let runner = this.head

    // if (this.head == null) {
    //       return null
    //   }
    //   let runner = this.head
    //   while (runner.next !== null) {
          // var temp = runner
          // runner = runner.next
    //   }
    //   temp.next = null
    //   return runner
    // }

    // we are looking at the head
    if (runner.next === null) {
      const data = runner.data
      this.head = null
      return data
    }

    //              👇   👇
    //              👇
    // ->(1)->(2)->(3)->(4)->

    // move through the list
    while (runner.next.next !== null) {
      runner = runner.next
    }
    // find the second last one
    const data = runner.next.data
    runner.next = null

    return data
  }

  // EXTRA
  /**
   * Recursively finds the maximum integer data of the nodes in this list.
   * @param {Node} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {Node} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @return {?number} The max int or null if none.
   */
  recursiveMax(runner = this.head, maxNode = this.head) {
    // base case
    if (runner === null) {
      return maxNode.data
    }
    // search max
    //                        👇
    //         👇
    // ->(1)->(2)->(3)->(4)->
    if (runner.data > maxNode.data) {
      maxNode = runner
    }
    // forward movement
    // move through list
    return this.recursiveMax(runner.next, maxNode)
  }
}

const emptyList = new SinglyLinkedList()

emptyList.head = new Node(1)
emptyList.head.next = new Node(2)
emptyList.head.next.next = new Node(3)
emptyList.head.next.next.next = new Node(4)


// console.log(emptyList.contains(2))
// console.log(emptyList.containsRecursive(19))
// console.log(JSON.stringify(emptyList))
// console.log(emptyList.removeBack())
// console.log(JSON.stringify(emptyList))
// console.log(emptyList.removeBack())
// console.log(JSON.stringify(emptyList))
// console.log(emptyList.removeBack())
// console.log(JSON.stringify(emptyList))
// console.log(emptyList.removeBack())
// console.log(JSON.stringify(emptyList))


console.log(emptyList.recursiveMax())
console.log(JSON.stringify(emptyList))
