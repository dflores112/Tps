//Complete Linked List building a class with these properties : Push,Pop, Unshift, Shift, Get,Set,Insert,remove

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor (){
    this.head = null;
    this.tail = null;
    this.length = 0
  }
  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return null;
    let current = this.head;
    let newTail = current;
    while(current.next){
      newTail = current;
      current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }
  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
    this.length++
    return this;
  }
  shift(){
    if(!this.head) return null;
    let oldHead = this.head;
    let newHead = oldHead.next;
    this.head = newHead;
    this.length--
    if(this.length === 0){
      this.tail = null;
    }
    return this;
  }
  get(i){
    if(i < 0 || i > this.length) return null;
    let current = this.head
    let counter = 0
    while(counter !== i){
      current = current.next
      counter++
    }
    return current
  }
  set(i,val){
    if(i < 0 || i > this.length) return null;
    let node = this.get(i)
    if(node){
    node.val = val;
    return node;
    } else {
      return null
    }
  }
  insert(val, i){
    if(i === 0) return !!this.unshift(val);
    if(i === this.length - 1) return !!this.push(val);
    if(i < 0 || i > this.length) return false;
    let newNode = new Node(val);
    let prev = this.get(i - 1);
    let post = prev.next;
    prev.next = newNode;
    newNode.next = post;
    this.length++;
    return true;
  }
  remove(i){
    if(i < 0 || i > this.length) return false;
    if(i === 0) return !!this.shift()
    if(i === this.length - 1) return !!this.pop();
    let removed = this.get(i - 1);
    let post = this.get(i + 1);
    removed.next = post;
    this.length--
    if(this.length === 0){
      this.tail = null;
      this.head = null;
    }
    return true;
  }
}

let firstList = new LinkedList;
firstList.push('Daniel')
firstList.push('Jack')
firstList.push('Lim')



