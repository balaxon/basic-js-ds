const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
}

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addValue(this.tree, data);

        function addValue(node, data) {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addValue(node.left, data)
            } else {
                node.right = addValue(node.right, data)
            }
            return node;
        }
  }

  has(data) {
    return recursiveSearch(this.tree, data);

        function recursiveSearch(node, data) {
            if (!node) {
                return false;
            }

            if (node.data === data) {
                return true;
            }

            return data < node.data ?
                recursiveSearch(node.left, data) :
                recursiveSearch(node.right, data)
        }
  }

  find(data) {
    return recursiveSearch(this.tree, data);

        function recursiveSearch(node, data) {
            if (!node) {
                return null;
            }

            if (node.data === data) {
                return node;
            }

            return data < node.data ?
                recursiveSearch(node.left, data) :
                recursiveSearch(node.right, data)
        }
  }

  remove(data) {
    this.tree = removeData(this.tree, data);
    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRigth = node.right;

        while (minRigth.left) {
          minRigth = minRigth.left;
        }
        node.data = minRigth.data;
        node.right = removeData(node.right, minRigth.data);
        return node;
      }
    }
  }

  min() {
    if (!this.tree) {
      return 1;
  }

  let node = this.tree;
  while (node.left) {
      node = node.left;
  }
  return node.data;
  }

  max() {
    if (!this.tree) {
      return;
  }

  let node = this.tree;
  while (node.right) {
      node = node.right;
  }
  return node.data;
  }
}

module.exports = {
  BinarySearchTree
};