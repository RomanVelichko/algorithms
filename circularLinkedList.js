class Node {
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

  // Метод добавления новой ноды в начало списка
  prepend(data) {
    const newNode = new Node(data);
   
    if (!this.head) { 
      this.head = newNode; 
      this.tail = newNode; 
      this.tail.next = this.head; 
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head = newNode;
    }
  }

  // Метод добавления новой ноды в конец списка
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      this.tail.next = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    }
  }

  // Метод поиска ноды по значению
  find(data) {
    let current = this.head;

    do {
      if (current.data === data) {
        return current;
      }

      current = current.next;
    } while (current !== this.head);

    return false;
  }

  // Метод обновления значения ноды
  update(data, newData) {
    const node = this.find(data);
    
    if (node !== null) {
      node.data = newData;
      
      return true;
    }
    
    return false; 
  }

  // Метод удаления ноды по значению
  remove(data) {
    const node = this.find(data);
  
    if (node) {
      if (node === this.head) { // Удаление, если нода - голова
        if (this.head === this.tail) { 
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
          this.tail.next = this.head;
        }
      } else if (node === this.tail) { // Удаление, если нода - это хвост
        let current = this.head;

        while (current.next !== this.tail) {
          current = current.next;
        }
        
        this.tail = current;             
        this.tail.next = this.head;
      } else {                            // Удаление из середины
        let current = this.head;

        while (current.next !== node) {
          current = current.next;
        }

        current.next = node.next // Переписываем ссылку предыдущей ноды на следующую за удаляемой
      }

      return true;
    }

    return false;
  }


  // Метод обхода/вывода значений нод в массив
  toArray() {
    const result = [];

    if (!this.head) return;

    let current = this.head;

    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);

    return result;
  }
}

const clist = new CircleLinkedList();

clist.append("hi");
clist.append("hello");
clist.append("bye");
clist.append("bro");
clist.prepend("yo");
clist.toArray();
