/**
 * Determines if this tree contains the given searchVal.
 * @param {number} searchVal The number to search for in the node's data.
 * @return {boolean} Indicates if the searchVal was found.
 */
contains(searchVal) {}

/**
 * Determines if this tree contains the given searchVal.
 * @param {number} searchVal The number to search for in the node's data.
 * @return {boolean} Indicates if the searchVal was found.
 */
containsRecursive(searchVal, current = this.root) {}

/**
 * DFS Inorder: (Left, Parent, Right)
 * Converts this BST into an array following Depth First Search inorder.
 * See debugger call stack to help understand the recursion.
 * Example on the fullTree var:
 * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @return {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
toArrInorder(node = this.root, vals = []) {}

/*
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/