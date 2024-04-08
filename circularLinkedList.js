class NodeCircleList {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class CircleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Метод добавления новой ноды в конец списка
  append(data) {
    const node = new NodeCircleList(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      node.next = node;
    } else {
      node.next = this.head;
      this.tail.next = node;
      this.tail = node;
    }
  }

  // Метод добавления новой ноды в начало списка
  prepend(data) {
    const node = new NodeCircleList(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.tail.next = node;
    } else {
      node.next = this.head;
      this.tail.next = node;
      this.head = node;
    }
  }

  // Метод поиска ноды по значению
  find(data) {
    if (!this.head) return;

    let current = this.head;
    let previous = this.tail

    do {
      if (current.data === data) {
        return { current, previous };
      }

      previous = current;
      current = current.next;
    } while (current !== this.head);

    return false;
  }


  // Метод удаления ноды по значению
  remove(data) {
    const node = this.find(data);

    if (!node) return false;

    if (node.current === this.head) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.tail.next = this.head;
      }
    }

    if (node.current !== this.head && node.current !== this.tail) {
      node.previous.next = node.current.next
    }

    if (node.current === this.tail) {
      this.tail = node.previous;
      node.previous.next = this.head;
    }

    return node.current.data;
  }

  // Метод обновления значения ноды
  update(data, newData) {
    if (!this.head) return false;

    let node = this.find(data);

    if (!node) return false;

    if (node) {
      node.current.data = newData;
      return true;
    }

    return false;
  }

  // Метод обхода/вывода значений нод в массив
  toArray() {
    const result = [];

    if (!this.head) return result;

    let current = this.head;
    let initialNode = this.head;

    do {
      result.push(current.data);
      current = current.next;
    } while (current !== initialNode);

    return result;
  }
}

const clist = new CircleLinkedList();

clist.append("hi");
clist.append("hello");
clist.append("bye");
clist.append("bro");
clist.prepend("yo");

console.log("FIND CIRC", clist.find("bye"));
console.log("UPDATE CIRC", clist.update("hello", "123"));
console.log("CIRCULAR CIRC", clist.toArray());
