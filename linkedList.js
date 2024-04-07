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
    if (!this.head) return;
   
    let deletedNode = null;

    // Если удаляемый элемент является первым элементом списка
    if (this.head.data === data) {
      deletedNode = this.head.data;
      this.head = this.head.next
      return deletedNode;
    }

    let current = this.head;
    
    while (current.next) {
      if (current.next.data === data) {
        deletedNode = current.next.data;
        current.next = current.next.next;
        return deletedNode;
      } else {
        current = current.next;
      }
    }

    // Если удаляемый элемент является последним элементом списка
    if (this.tail.data === data) {
      deletedNode = this.tail.data;
      this.tail = current;
    }

    return deletedNode;
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
