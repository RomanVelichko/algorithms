// Структура данных 'очередь'
class Queue {
  constructor(){
    this.queue = new Array();
  }
 
  // Метод добавления данных в конец очереди
  push(data) {
    this.queue.push(data);
  }

  // Метод удаления данных из начала очереди
  shift(data) {
    if (!this.queue.length) return;

    this.queue.shift(data);
    return true;
  }

  // Метод очистки очереди/обнуление 
  clear() {
    this.queue = new Array();
  }

  // Метод проверки на пустую очередь
  isEmpty() {
    return this.queue.length === 0;
  }

 // Метод вывода массива очереди
  toArray() {
    return this.queue;
  }
}

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log("QUEUE", queue.toArray());
queue.shift();
console.log("QUEUE", queue.toArray());
