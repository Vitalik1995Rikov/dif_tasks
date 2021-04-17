class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  append(data) {
    const node = new Node(data)

    if (this.tail) {
      this.tail.next = node
    }
    if (!this.head) {
      this.head = node
    }
    this.tail = node
  }

  prepend(data) {
    const node = new Node(data, this.head)

    if (!this.tail) {
      this.tail = node
    }
    this.head = node
  }

  insertAfter(after, data) {
    const found = this.find(after)

    if(!found) {
      return
    }
    found.next = new Node(data, found.next)
  }

  find (data) {
    if (!this.head) {
      return
    }

    let current = this.head
    while (current) {
      if (current.data === data) {
        return current
      }
      current = current.next
    }
  }

  remove(data) {
    if (!this.head) {
      return
    }

    while (this.head && this.head.data === data) {
      this.head = this.head.next
    }

    let current = this.head
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next
      } else {
        current = current.next
      }
    }
    if (this.tail.data === data) {
      this.tail = current
    }
  }
}

const list = new LinkedList();

list.prepend('Hi')
list.append('My')
list.append('name')
list.append('is')
list.append('Slim')
list.append('Shady')
list.remove('name')

console.log(list);