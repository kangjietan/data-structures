

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._storage = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log("Insert: ", k, index);
  if (this._storage[index]) {
    if (this.retrieve(k)) {
      console.log("THIS WORKS");
      for (let i = 0; i < this._storage[index].length; i += 1) {
        if (this._storage[index][i][0] === k) {
          this._storage[index][i][1] = v;
        }
      }
    }
    this._storage[index].push([k, v]);
  } else {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  }
  console.log(this._storage);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log("Retrieve: ", k, index);
  for (let i = 0; i < this._storage[index].length; i += 1) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (let i = 0; i < this._storage[index].length; i += 1) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


