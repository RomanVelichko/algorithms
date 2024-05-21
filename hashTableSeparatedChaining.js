// <Ready>

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

  // Метод поиска ноды по значению
  find(key) {
    let current = this.head;

    while (current) {
      if (current.data.key === key) {
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
        this.tail.next = null;
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

/** 
 * Реализация Хэш-таблицы и решение коллизий методом цепочек
 * Структура данных хэш-таблицы */
class HashTable {
  constructor(length = 10) {
    this.store = new Array(length)
  }

  // Метод для хэширования ключа
  hash(key) {
    const keyStr = String(key);
    let sum = 0;
    for (let i = 0; i < keyStr.length; i++) {
      sum += keyStr.charCodeAt(i);
    }
    return sum % this.store.length;
  }

  // Метод добавления данных в хэштаблицу
  set(key, value) {
    const index = this.hash(key);
    this.store[index] = this.store[index] || new LinkedList();
    const list = this.store[index];
    const findNode = list.find(key, value);

    if (!findNode) {
      list.append({ key, value });
    } else {
      findNode.data.value = value;
    }
  }
  
  // Метод получения данных из хэштаблицы по ключу
  get(key) {
    const index = this.hash(key);
    const list = this.store[index];
    
    if (!list) {
      return false;
    }

    const node = list.find(key);

    return node ? node.data.value : false;
  }

  // Метод удаления по ключу
  remove(key) {
    const index = this.hash(key);
    const list = this.store[index];
    
    if (!list) {
      return false;
    }

    const removed = list.remove(key);

    if (removed) {
      return true
    }

    return false;
  }

  // Метод вывода всех ключ-значений в массив
  toArray() {
    const entries = [];
    this.store.forEach((bucket) => {
      const bucketArray = bucket.toArray();
      
      for (const item of bucketArray) {
        entries.push({ key: item.key, value: item.value });
      }
    });
    return entries;
  }

  // Метод сброса всей хэштаблицы в дефолт
  clear() {
    this.store = new Array(this.store.length);
  }
}

const dict = new HashTable();

dict.set("ab", 1);
dict.set("ba", 2);
dict.set("ba", 1);
dict.set("bb", 1);
dict.set("foo", 3);
dict.set("foo", 3);
dict.set("ofo", 3);
dict.set("oof", 3);
dict.set("bar", 4);
dict.set("rab", 4);
dict.set("kkk", 5);
dict.set("kkk", 6);
dict.set("kkk", 7);

console.log(dict); 
console.log(dict.toArray()); 

console.log(dict.get("kkk")); // Должен вернуть 7
