export interface INode {
  value: number | string;
  next: LinkedListNode | null;
}

class LinkedListNode implements INode {
  constructor(
    public value: number | string,
    public next: LinkedListNode | null = null,
  ) {}
}

export interface INodeList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
}

export class LinkedList implements INodeList {
  public head: LinkedListNode | null = null;
  public tail: LinkedListNode | null = null;

  public prepend(value: number | string ): LinkedList {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
      return this;
    }
  }
}

let list = new LinkedList();
list.prepend('1');
console.log(list);

