// TODO : Переделать реализацию добавления так чтоб
// хотя бы перезатирало когда добавляем с таким же ключом
// < Ready >

/** Структура данных хэш-таблицы */
class HashTable {
  constructor(lenght = 10) {
    this.store = new Array(lenght);
    this.size = 0
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
    this.store[index] = { ...this.store[index], [key]: value };
    this.size++;
  }

  // Метод получения данных из хэштаблицы по ключу
  get(key) {
    const index = this.hash(key);
    return this.store[index][key];
  }

  // Метод удаления по ключу
  remove(key) {
    const index = this.hash(key);
    delete this.store[index][key];
    this.size--;
  }

  // Метод вывода всех ключ-значений в массив
  toArray() {
    const entries = [];
    if (this.store.length) {
      this.store.forEach((bucket) => {
        for (const [key, value] of Object.entries(bucket)) {
          entries.push({ key, value });
        }
      })
    }
    return entries;
  }

  // Метод сброса всей хэштаблицы в дефолт
  clear() {
    this.length = 0;
    return this.store = {};
  }
}

const dict = new HashTable();

dict.set("ab", 1);
dict.set("ba", 2);
dict.set("foo", 3);
dict.set("bar", 4);
dict.set("kkk", 5);
