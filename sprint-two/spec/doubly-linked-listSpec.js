describe('doubly-linked-list', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail properties', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", "addToHead", "removeTail", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
    expect(linkedList.addToHead).to.be.a('function');
    expect(linkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed for head', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  it('should be able to add a function', function() {
    var test = function() {};
    linkedList.addToTail(test);
    expect(linkedList.contains(test)).to.equal(true);
  });

  // Tests for doubly-linked list
  it('should add to head', function() {
    linkedList.addToHead(4);
    expect(linkedList.contains(4)).to.equal(true);
  });

  it('if list is empty, addToTail should make new node both tail and head', function() {
    linkedList.addToTail(4);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.tail.value).to.equal(4);
  });

  it('if list is empty, addToHead should make new node both tail and head', function() {
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should not contain a value that was removed for tail', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeTail();
    expect(linkedList.contains(5)).to.equal(false);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeTail()).to.equal(4);
  });
});
