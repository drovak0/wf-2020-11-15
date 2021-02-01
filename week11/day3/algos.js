/**
 * Determines whether or not the given search value exists in this list.
 * @param {any} val The data to search for in the nodes of this list.
 * @return {boolean}
 */
contains(val) {}

/**
 * Determines whether or not the given search value exists in this list.
 * @param {any} val The data to search for in the nodes of this list.
 * @param {?node} current The current node during the traversal of this list
 *    or null when the end of the list has been reached.
 * @return {boolean}
 */
containsRecursive(val, current = this.head) {}

/**
 * Removes the last node of this list.
 * @return {any} The data from the node that was removed.
 */
removeBack() {}

// EXTRA
/**
 * Recursively finds the maximum integer data of the nodes in this list.
 * @param {Node} runner The start or current node during traversal, or null
 *    when the end of the list is reached.
 * @param {Node} maxNode Keeps track of the node that contains the current
 *    max integer as it's data.
 * @return {?number} The max int or null if none.
 */
recursiveMax(runner = this.head, maxNode = this.head) {}