class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

 export class LinkedList {
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

    if (!this.headNode) {
        this.headNode = newNode;
    } else {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    }

  }

  size() {
    let count = 0;
    let current = this.headNode;

    while(current) { 
      count += 1;
      current = current.nextNode;
    }

    return count;
  }

  head() {
    if (!this.headNode) {
      return undefined;
    } else {
      return this.headNode.value;
    }
  }

  tail() {
    if (!this.headNode) {
      return undefined;
    } else {
      let current = this.headNode;

      while (current.nextNode) {
        current = current.nextNode;
      }
    return current.value;
    }
  }

  at(index) {
    if (index < 0 || index >= this.size()) return undefined;

    let current = this.headNode;

    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    
    return current.value;
  }

  pop() {

    if (!this.headNode) return undefined;
    
    let headValue = this.headNode.value;
    this.headNode = this.headNode.nextNode;

    return headValue;
    
  }

  contains(value) {
    let current = this.headNode;

    while(current) {

      if (value === current.value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let count = 0;
    let cur = this.headNode;

    while(cur) {
      if(value === cur.value) {
        return count;
      }
      count += 1
      cur = cur.nextNode;
    }

    return -1;
  }

  insertAt(index, ...values) {
    let listSize = this.size();
    let valLength = values.length;

    if (valLength === 0) return;

    if (index < 0 || index > listSize) {
      throw new RangeError(`Please give a valid range between 0 and ${listSize}.`)
    }

    const valHead = new Node(values[0]);
    let valTail = valHead;

    for (let i = 1 ; i < valLength ; i++) {
      const newNode = new Node(values[i])
      valTail.nextNode = newNode;
      valTail = newNode;
    }

    if (index === 0) {
      valTail.nextNode = this.headNode;
      this.headNode = valHead;
    } else {
      let cur = this.headNode;
      
      for (let i = 0; i < index - 1 ; i++){
        cur = cur.nextNode;
      }

      valTail.nextNode = cur.nextNode;
      cur.nextNode = valHead;
    }
  }

  removeAt(index) {
    let listLength = this.size();
    if(index < 0 || index >= listLength) throw new RangeError(`Please give a valid range between 0 and ${listLength-1}.`)
    
    let cur = this.headNode;

    if (index === 0) {
      this.headNode = cur.nextNode;
      return
    }

    for (let i = 0 ; i < index - 1 ; i++){
      cur = cur.nextNode
    }

    cur.nextNode = cur.nextNode.nextNode;
  }

  toString() {
    if(!this.headNode) return "";

    let current =  this.headNode;
    let result = '';

    while(current) {
      result += "( " + current.value + " )" + " -> ";
      current = current.nextNode;
    }

    return result + "null"
  }
}

