var BinarySearchTree = function (value) {
  var newTree = {};
  _.extend(newTree, binaryTreeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree.children = 0;

  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function (value) {

  var recursion = function (x) {
    if (x.value > value) {
      if (x.left === null) {
        x.left = BinarySearchTree(value);
      } else {
        recursion(x.left);
      }
    } else if (x.value < value) {
      if (x.right === null) {
        x.right = BinarySearchTree(value);
      } else {
        recursion(x.right);
      }
    }
  };

  recursion(this);
};

binaryTreeMethods.contains = function (value) {
  var result = false;

  var recursion = function(x) {
    if (x.value === value) {
      result = true;
    }

    if (value > x.value) {
      if (x.right !== null) {
        recursion(x.right);
      }
    } else if (value < x.value) {
      if (x.left !== null) {
        recursion(x.left);
      }
    }
  };

  recursion(this);

  return result;
};

binaryTreeMethods.depthFirstLog = function (callback) {
  var recursion = function (x) {
    callback(x.value);
    if (x.left) {
      recursion(x.left);
    }
    if (x.right) {
      recursion(x.right);
    }
  };

  recursion(this);
};




/*
 * Complexity: What is the time complexity of the above functions?
  insert(): O(log n).
  contains(): O(log n).
  depthFirstLog: linear.
 */
