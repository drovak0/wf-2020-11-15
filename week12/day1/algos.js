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

  // - [x] push (adds new item and returns new size)
  push(x) {
    this.items[this.items.length] = x
    // this.items.push(x)
    console.log('push: ', this.items.length)
    return this.size();
  }
  // - [x] pop (returns removed item)
  pop() {
    if (this.isEmpty() === false) {
      var last= this.items[this.items.length-1]
      console.log(last);
      this.items.length= this.items.length-1;
      // console.log(this.items);
      console.log("pop: ", last)
      return last;
      // return this.items.pop()
    }
    return undefined
  }
  // - [x] isEmpty
  isEmpty() {
    console.log("isEmpty: ", this.items.length === 0 ? true : false)
    return this.items.length === 0 ? true : false;
  }
  // - [x] size
  size() {
    console.log(`size: `, this.items.length);

    return this.items.length
  }
  // - [x] peek (return top item without removing)
  peek() {
    console.log(`peek: `, this.items[this.size() - 1]);
    return this.items[this.size() - 1]
  }
}

const testStack = new Stack()
testStack.hello()
testStack.push(10)
testStack.push(20)
testStack.pop()
testStack.isEmpty()
testStack.size()
testStack.peek()