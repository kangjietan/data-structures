var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let tree = Tree(value);
  this.children.push(tree);
  tree.parent = this;
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

treeMethods.removeParent = function () {
  if (this.parent) {
    let targetIndex = this.parent.children.indexOf(this);
    this.parent.children.splice(targetIndex, 1);
    this.parent = null;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  addChild(): Constant.
  contains(): Linear.
 */
