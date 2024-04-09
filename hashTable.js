class HashTable {
  constructor(){
    this.store = new Array(10);
  }

  // Метод для хэширования ключа
  hash(key) {
    let sum = 0;
    for (let char of key) {
      sum += key.charCodeAt(char);
    }

    return sum % this.store.length;
  }

  // Метод добавления данных в хэштаблицу
  add(key, value) {
    this.store[this.hash(key)] = this.store[this.hash(key)] || [];
    this.store[this.hash(key)].push({ key, value });
  }

  // Метод получения данных из хэштаблицы по ключу
  get(key) {
    return this.store[this.hash(key)].find((item) => item.key === key)?.value;
  }

  // Метод удаления по ключу
  remove(key) {
    const bucket = this.store[this.hash(key)];

    if (!bucket) return;

    const index = bucket.findIndex((item) => item.key === key);
    bucket.splice(index, 1);
  }

  // Метод сброса всей хэштаблицы в дефолт
  clear() {
    this.store = new Array(10);
  }

  // Метод вывода значений в массив
  toArray() {
    const entries = [];
    this.store.forEach((item) => entries.push(...item));
    return entries;
  }
}

const dict = new HashTable();

dict.add("ab", 1);
dict.add("ba", 2);
dict.add("foo", 3);
dict.add("bar", 4);
dict.add("kkk", 45);

dict.toArray();
