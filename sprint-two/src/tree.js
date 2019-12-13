var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  var result = false;
  var recursion = function(tree) {
    if (tree.value === target) {
      result = true;
    }
    if (tree.children.length > 0) {
      for (let i = 0; i < tree.children.length; i++) {
        recursion(tree.children[i]);
      }
    }
  };
  recursion(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
