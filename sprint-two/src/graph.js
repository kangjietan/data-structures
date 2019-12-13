

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.nodes.length; i += 1) {
    if (this.nodes[i] === node) {
      return true;
    }
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.nodes.length; i += 1) {
    if (this.nodes[i] === node) {
      this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let node1 = this.edges[fromNode];
  let node2 = this.edges[toNode];

  if (_.contains(node1, toNode) && _.contains(node2, fromNode)) {
    return true;
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let node1 = this.edges[fromNode];
  let node2 = this.edges[toNode];

  if (_.indexOf(node1, toNode) > 0 && _.indexOf(node2, fromNode) > 0) {
    node1.splice(_.indexOf(node1, toNode), 1);
    node2.splice(_.indexOf(node2, fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */