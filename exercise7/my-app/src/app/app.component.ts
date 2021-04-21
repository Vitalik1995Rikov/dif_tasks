import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class App {

}

class ListNode<T>{
  constructor(data: T, next?: ListNode<T>) {
    this.data = data;
    this.next = next;
  }

  get data(): T {
    return this.data;
  }

  set data(value: T) {
    this.data = value;
  }

  get next(): ListNode<T> | undefined {
    return this.next
  }

  set next(value: ListNode<T> | undefined) {
    this.next = value;
  }
}


class LinkedList {
  private first: ListNode<T>;
  private last: ListNode<T>;
  private size: number; 

  get size(): number {
    return this.size;
  }

  add(data: T, position: number): void {
    if (!position) {
      this.addToEnd(data);
    } else {

    }
  }

  private addToEnd(data: T): void {
    if (this.size === 0) {
      this.first = this.last = new ListNode<T>();
    }
  }

}

let arr = new LinkedList();
arr.add(4, 4);