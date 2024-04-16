class NodeList {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Метод добавления новой ноды в конец списка
  append(data) {
    const node = new NodeList(data);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
  }


  // Метод добавления новой ноды в начало списка
  prepend(data) {
    const node = new NodeList(data, this.head);

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  // Метод поиска ноды по значению
  find(data) {
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

    if (node) {
      if (node === this.head) {
        if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
        }
      } else if (node === this.tail) {
        let current = this.head;

        while (current.next !== this.tail) {
          current = current.next;
        }

        this.tail = current;
      } else {
        let current = this.head;

        while (current.next !== this.tail) {
          current = current.next;
        }

        current.next = node.next;
      }
      return true;
    }
    return false;
  }

  // Метод обновления значения ноды
  update(data, newData) {
    if (!this.head) return;

    let node = this.find(data);

    if (node) {
      node.data = newData;
      return true;
    }

    return false;
  }

  // Метод обхода/вывода значений нод в массив
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

const list = new LinkedList();

list.append("hi");
list.append("hello");
list.append("bye");
list.prepend("yo");

console.log("FIND LL: ", list.find("bye"));
console.log("UPDATE LL: ", list.update("hello", "123"));
console.log("TOARRAY LL: ", list.toArray());
