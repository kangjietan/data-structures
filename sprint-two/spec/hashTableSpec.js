describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'],
    ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing'], ['Kang', 'Tan'], ['Brian', 'Tansy']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable.insert).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
    expect(hashTable.retrieve).to.be.a('function');
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should overwrite values that have the same key', function() {
    hashTable.insert('Bob', 'Loblaw');
    hashTable.insert('Bob', 'Barker');
    expect(hashTable.retrieve('Bob')).to.equal('Barker');
  });

  it('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).to.equal(undefined);
  });

  it('should handle hash function collisions', function() {
    var v1 = 'val1';
    var v2 = 'val2';
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  // Our test
  it('retrieve should return the value when the value is present for given key', function() {
    hashTable.insert('Steven', 'Tyler');
    expect(hashTable.retrieve('Steven')).to.equal('Tyler');
  });

  it('should count for all the index used in hashtable', function() {
    hashTable.insert('a', 'Tyler');
    hashTable.insert('ab', 'Tyler');
    hashTable.insert('abc', 'Tyler');
    hashTable.insert('abcd', 'Tyler');
    hashTable.insert('abcde', 'Tyler');
    hashTable.insert('abcdef', 'Tyler');
    hashTable.insert('abcdef', 'leeee');

    expect(hashTable.storageCount).to.equal(5);
  });

  it('should decrement when index is not used', function() {
    hashTable.insert('a', 'Tyler');
    hashTable.insert('ab', 'Tyler');
    hashTable.insert('abc', 'Tyler');
    hashTable.insert('abcd', 'Tyler');
    hashTable.insert('abcde', 'Tyler');
    hashTable.insert('abcdef', 'Tyler');
    hashTable.insert('abcdef', 'leeee');
    hashTable.remove('a');

    expect(hashTable.storageCount).to.equal(4);
  });

  // it('Limited Array should double in size when 75% has been filled', function() {
  //   hashTable.insert('a', 'Tyler');
  //   hashTable.insert('ab', 'Tyler');
  //   hashTable.insert('abc', 'Tyler');
  //   hashTable.insert('abcd', 'Tyler');
  //   hashTable.insert('abcde', 'Tyler');
  //   hashTable.insert('abcdef', 'Tyler');
  //   hashTable.insert('abcdefg', 'leeee');
  //   hashTable.insert('abcdefgh', 'leeee');
  //   hashTable.insert('abcdefghi', 'leeee');
  //   hashTable.insert('abcdefghij', 'leeee');
  //   hashTable.insert('abcdefghijk', 'leeee');
  //   hashTable.insert('abcdefghijkl', 'leeee');
  // });

  // (Advanced! Remove the extra "x" when you want the following tests to run)
  it ('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
  });

  it ('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    expect(hashTable._limit).to.equal(8);
  });
});
