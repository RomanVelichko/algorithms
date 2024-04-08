// Структура данных 'очередь'
class Queue {
  queue = new Array();

  // Метод добавления данных в конец очереди
  add(data) {
    this.queue.push(data);
  }

  // Метод удаления данных из начала очереди
  remove(data) {
    if (!this.queue.length) return;

    this.queue.shift(data);
    return true;
  }

  // Метод очистки очереди/обнуление 
  clear() {
    this.queue = new Array();
  }

 // Метод вывода массива очереди
  print() {
    return this.queue;
  }
}

const queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);

console.log("QUEUE", queue.print());
queue.remove();
console.log("QUEUE", queue.print());
queue.clear();
console.log("QUEUE", queue.print());
