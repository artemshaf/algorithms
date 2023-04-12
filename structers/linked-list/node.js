module.exports = class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return this.value;
  }
};
