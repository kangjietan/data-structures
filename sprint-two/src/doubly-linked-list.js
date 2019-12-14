var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    // Create a new node
    let newNode = Node(value);
    //if tail is null
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    }

    // if tail is not null
    if (list.tail) {
      newNode.previous = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function () {
    // Set the node to right to HEAD
    // Delete the node
    let currentHead = list.head.value;
    list.head = list.head.next;
    list.head.previous = null;
    return currentHead;
  };

  list.contains = function (target) {
    // If head or tail does not contain value, check next node
    // While current node is not tail (not equal to null)
    // if next node value is target, return true
    // If not check next node
    if (list.head.value === target || list.tail.value === target) {
      return true;
    }

    var nodeCheck = list.head.next;
    while (nodeCheck !== null) {
      if (nodeCheck.value === target) {
        return true;
      }
      nodeCheck = nodeCheck.next;
    }

    return false;
    // var recursion = function(x) {
    //   if (x.value === target) {
    //     return true;
    //   } else if (x.next === null) {
    //     return false;
    //   } else {
    //     recursion(x.next);
    //   }
    // };

    // return recursion(list.head);
  };

  list.addToHead = function (value) {
    let newNode = Node(value);

    if (list.head === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      newNode.next = list.head;
      list.head.previous = newNode;
      list.head = newNode;
    }

  };

  list.removeTail = function () {
    if (list.tail) {
      let removedTail = list.tail.value;
      list.tail.previous.next = null;
      list.tail = list.tail.previous;
      return removedTail;
    }
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail(): Constant.
  removeHead(): Constant.
  contains(): Linear.
 */

// Collection of nodes
// Nodes refer to each other
//