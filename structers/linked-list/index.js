// @ts-nocheck
import Comparator from "../utils/comparator";
import { LinkedListNode } from "./node";

export default class LinkedList {
  constructor(comparator) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparator);
  }

  reverse() {
    let currentNode = this.head;
    let prev = null;
    let next = null;

    while (currentNode) {
      next = currentNode.next;

      currentNode.next = prev;

      prev = currentNode;
      currentNode = next;
    }
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  checkIndex(index) {
    return index < 0 ? 0 : index;
  }

  insert(value, index) {
    index = this.checkIndex(index);

    if (index === 0) {
      this.prepend(index);

      return this;
    }

    let count = 1;
    let currentNode = this.head;
    const newNode = new LinkedListNode(value);

    while (currentNode) {
      if (count === index) break;

      count++;
      currentNode = currentNode.next;
    }

    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;

      return this;
    }

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;

      return this;
    }

    this.head = newNode;
    this.tail = newNode;

    return this;
  }

  delete(index) {
    if (!this.head) return this;

    index = this.checkIndex(index) + 1;

    let count = 1;
    let currentNode = this.head;

    while (currentNode) {
      if (count === index) break;

      count++;
      currentNode = currentNode.next;
    }

    if (!currentNode) {
      return this;
    }

    const deletedNode = currentNode.next;

    currentNode.next = deletedNode.next;

    return deletedNode;
  }

  get(index) {
    if (!this.head) return null;

    index = this.checkIndex(index);

    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (count === index) break;

      count++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  find(value) {
    if (!this.head) return null;

    index = this.checkIndex(index);

    let currentNode = this.head;

    while (currentNode) {
      if (this.compare(currentNode.value, value)) return currentNode;

      currentNode = currentNode.next;
    }

    return currentNode;
  }

  deleteHead() {
    if (!this.head) return null;

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;

      return deletedHead;
    }

    this.head = null;
    this.tail = null;

    return deletedHead;
  }

  deleteTail() {
    if (!this.head) return null;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return null;
    }

    let currentNode = this.head;

    //! get element behind last
    while (currentNode && !currentNode.next.next) {
      currentNode = currentNode.next;
    }

    let deletedTail = currentNode.next;
    currentNode.next = null;
    this.tail = currentNode;

    return deletedTail;
  }

  fromArray(values) {
    values.map((value) => this.append(value));

    return this;
  }

  toArray() {
    const arr = [];

    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode);

      currentNode = currentNode.next;
    }

    return arr;
  }

  toString() {
    return this.toArray()
      .map((value) => String(value))
      .toString();
  }
}
