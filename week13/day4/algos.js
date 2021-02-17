/**
 * Recursively counts the total number of nodes in this tree.
 * @param {Node} node The current node during the traversal of this tree.
 * @return {number} The total number of nodes.
 */
size(node = this.root) {}

/**
 * Calculates the height of the tree which is based on how many nodes from
 * top to bottom (whichever side is taller).
 * @param {Node} node The current node during traversal of this tree.
 * @return {number} The height of the tree.
 */
height(node = this.root) {}

/**
 * Determines if this tree is a full tree. A full tree is a tree where every
 * node has both a left and a right except for the leaf nodes (last nodes)
 * @param {Node} node The current node during traversal of this tree.
 * @return {boolean} Indicates if this tree is full.
 */
isFull(node = this.root) {}

/*
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
  /   \
2       3
*/