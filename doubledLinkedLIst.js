class NodeDoubleList {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubledLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Метод добавления ноды в конец списка
  append(data) {
    const node = new NodeDoubleList(data, this.tail);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
  }

  // Метод добавления ноды в начало списка
  prepend(data) {
    const node = new NodeDoubleList(data, null, this.head);

    if (!this.tail) {
      this.tail = node;
    }

    if (this.head) {
      this.head.prev = node;
    }

    this.head = node;
  }

  // Метод поиска ноды по значению
  find(data) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }

      current = current.next;
    }

    return false;
  }

  // Метод удаления ноды по значению
  remove(data) {
    const node = this.find(data);
    let current = this.head;

    if (node) {
      if (node === this.head) {
        if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
          this.head.prev = null;
        }

      } else if (node === this.tail) {

        while (current.next !== this.tail) {
          current = current.next;
        }
        
        if (this.head.next === this.tail) {
          this.tail = this.head;
          this.tail.next = null;
        } else {
          this.tail = this.tail.prev;
          this.tail.next = null;
        }
      } else {

        while (current.next !== this.tail) {
          current = current.next;
        }

        current.next.prev = current.prev;
        current.prev.next = current.next;
      }

      return true;
    }

    return false;
  }


  // Метод обновления ноды
  update(data, newData) {
    if (!this.head) return;

    let node = this.find(data);

    if (node) {
      node.data = newData;
      return true;
    }

    return false;
  }

  // Метод обхода/вывода в массив значения ноды
  toArray() {
    const output = [];

    let current = this.head;

    while (current) {
      output.push(current.data);
      current = current.next;
    }

    return output;
  }
}

const dlist = new DoubledLinkedList();

dlist.append("hi");
dlist.append("hello");
dlist.append("bye");
dlist.prepend("yo");

console.log("FIND DBL", dlist.find("bye"));
console.log("UPDATE DBL", dlist.update("hello", "123"));
console.log("TOARRAY DBL", dlist.toArray());
console.log("BACKWARD DBL", dlist.backward());
