var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.storageCount = 0;
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
    } else {
      this._storage.get(index).push([k, v]);
    }
  } else {
    this._storage.set(index, [[k, v]]);
    this.storageCount++;
    // this._storage.get(index).push([k, v]);
  }

  if (this.storageCount >= (this._limit * 0.75)) {
    // var newHashTable = new HashTable;
    // newHashTable._limit = this._limit * 2;
    // console.log("NEW TREE===================", newHashTable);
    // this._storage.each(function (arr) {
    //   if (Array.isArray(arr)) {
    //     for (let i = 0; i < arr.length; i += 1) {
    //       console.log(arr[i][0], arr[i][1])
    //       newHashTable.insert(arr[i][0], arr[i][1]);
    //     }
    //   }
    // });

    // newTable(this);
    // console.log(this._storage);

    var currentHashTable = [];
    this._storage.each(function (arr) {
      if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i += 1) {
          currentHashTable.push(arr[i]);
        }
      }
    });

    this._limit += this._limit;
    this._storage = LimitedArray(this._limit);
    this.storageCount = 0;

    console.log(this._limit);

    for (let i = 0; i < currentHashTable.length; i += 1) {
      this.insert(currentHashTable[i][0], currentHashTable[i][1]);
    }
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
  if (hashTableArr) {
    for (let i = 0; i < hashTableArr.length; i += 1) {
      if (hashTableArr[i][0] === k) {
        return hashTableArr[i][1];
      }
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
      hashTableArr.splice(i, 1);
      if (hashTableArr.length === 0) {
        this.storageCount--;
      }
    }
  }

  if (this.storageCount <= (this._limit * 0.25)) {
    var currentHashTable = [];
    this._storage.each(function (arr) {
      if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i += 1) {
          currentHashTable.push(arr[i]);
        }
      }
    });

    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);
    this.storageCount = 0;

    for (let i = 0; i < currentHashTable.length; i += 1) {
      this.insert(currentHashTable[i][0], currentHashTable[i][1]);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  insert(): Logarithmic.
  retrieve(): Constant.
  remove(): Constant.
 */


