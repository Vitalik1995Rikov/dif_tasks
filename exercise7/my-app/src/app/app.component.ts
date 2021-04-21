import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class App {
  redux = [];
}



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

  public append(value: number | string): LinkedList {
    const newNode = new LinkedListNode(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  public delete(value: number | string): LinkedListNode | null {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    if (this.tail && this.tail.value === value) {
      this.tail = currentNode;
    }
    return deletedNode;
  }


  public find(value?: number | string | {} | undefined): LinkedListNode | null {
    if (!this.head) {
      return null;
    }
    let currentNode: LinkedListNode | null = this.head;
    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  public toArray(): LinkedListNode[] {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}


let list = new LinkedList();
list.prepend('0');
list.append('1');
console.log(list.find('0'));
console.log(list);