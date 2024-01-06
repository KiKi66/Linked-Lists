class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  getSize() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  getHead() {
    return this.headNode;
  }

  getTail() {
    let current = this.headNode;
    while (current && current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this.headNode;
    let i = 0;

    while (current) {
      if (i === index) {
        return current;
      }
      i++;
      current = current.nextNode;
    }

    return null;
  }

  pop() {
    if (!this.headNode) {
      return null;
    }

    let current = this.headNode;
    let previous = null;

    while (current && current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    if (!previous) {
      // There is only one node in the list
      this.headNode = null;
    } else {
      previous.nextNode = null;
    }

    return current;
  }

  contains(value) {
    let current = this.headNode;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.headNode;
    let i = 0;

    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.nextNode;
      i++;
    }

    return null;
  }

  toString() {
    let list = "";
    let current = this.headNode;

    while (current) {
      list += `(${current.value}) -> `;
      current = current.nextNode;
    }

    list += "null";

    return list;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.getSize()) {
      console.log("Index is out of scope");
      return;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.nextNode;
        i++;
      }

      previous.nextNode = newNode;
      newNode.nextNode = current;
    }
  }
}
