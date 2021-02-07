class Stack {
  // Last In First Out

  /**
   * The constructor is executed when instantiating a new Stack() to construct
   * a new instance.
   * @return {Stack} This new Stack instance is returned without having to
   *    explicitly write 'return' (implicit return).
   */
  constructor() {
    this.items = []
  }

  // methods go here
  hello() {
    console.log("world")
  }

  // - [ ] push (adds new item and returns new size)
  // - [ ] pop (returns removed item)
  // - [ ] isEmpty
  // - [ ] size
  // - [ ] peek (return top item without removing)
}

const testStack = new Stack()
testStack.hello()
testStack.push()
testStack.pop()
testStack.isEmpty()
testStack.size()
testStack.peek()