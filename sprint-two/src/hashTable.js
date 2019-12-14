var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this._storage = [];
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if (this._storage[index]) {
  //   if (this.retrieve(k)) {
  //     for (let i = 0; i < this._storage[index].length; i += 1) {
  //       if (this._storage[index][i][0] === k) {
  //         this._storage[index][i][1] = v;
  //       }
  //     }
  //   }
  //   this._storage[index].push([k, v]);
  // } else {
  //   this._storage[index] = [];
  //   this._storage[index].push([k, v]);
  // }

  // Using given array access methods ============================================

  if (this._storage.get(index)) {
    if (this.retrieve(k)) {
      for (let i = 0; i < this._storage.get(index).length; i += 1) {
        if (this._storage.get(index)[i][0] === k) {
          this._storage.get(index)[i][1] = v;
        }
      }
    }
    this._storage.get(index).push([k, v]);
  } else {
    this._storage.set(index, [[k, v]]);
    // this._storage.get(index).push([k, v]);
  }

  // if (this._storage.get(index)) {
  //   if (this.retrieve(k)) {
  //     this._storage.each(function (array) {
  //       for (let i = 0; i < array.length; i += 1) {
  //         if (array[0] === k) {
  //           array[1] = v;
  //         }
  //       }
  //     });
  //   }
  //   this._storage.get(index).push([k, v]);
  // } else {
  //   this._storage.set(index, []);
  //   this._storage.get(index).push([k, v]);
  // }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // for (let i = 0; i < this._storage[index].length; i += 1) {
  //   if (this._storage[index][i][0] === k) {
  //     return this._storage[index][i][1];
  //   }
  // }

  // Using given array access methods ============================================
  var hashTableArr = this._storage.get(index);
  for (let i = 0; i < hashTableArr.length; i += 1) {
    if (hashTableArr[i][0] === k) {
      return hashTableArr[i][1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // for (let i = 0; i < this._storage[index].length; i += 1) {
  //   if (this._storage[index][i][0] === k) {
  //     this._storage[index].splice(i, 1);
  //   }
  // }

  // Using given array access methods ============================================
  var hashTableArr = this._storage.get(index);
  for (let i = 0; i < hashTableArr.length; i += 1) {
    if (hashTableArr[i][0] === k) {
      return hashTableArr.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  insert(): Logarithmic.
  retrieve(): Constant.
  remove(): Constant.
 */


