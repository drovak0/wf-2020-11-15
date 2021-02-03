/**
 * Concatenates the nodes of a given list onto the back of this list.
 * @param {SinglyLinkedList} addList An instance of a different list whose
 *    whose nodes will be added to the back of this list.
 * @return {SinglyLinkedList} This list with the added nodes.
 */
concat(addList) {}

/**
 * Finds the node with the smallest number as data and moves it to the front
 * of this list.
 * @return {SinglyLinkedList} This list.
 */
moveMinToFront() {}

/**
 * Splits this list into two lists where the 2nd list starts with the node
 * that has the given value.
 * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
 * and the return value will be a new list containing (5=>2=>4)
 * @param {any} val The value in the node that the list should be split on.
 * @return {SinglyLinkedList} The split list containing the nodes that are
 *    no longer in this list.
 */
splitOnVal(val) {}