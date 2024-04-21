// Реализовать метод удаления как O(1), а не O(n)
// Структура данных 'очередь'
// < Ready >

/** Структура очередь */
class NodeQueue {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
  }
 
  // Метод добавления данных в конец очереди
  enqueue(data) {
    const newNode = new NodeQueue(data, this.tail)

    if(this.tail) {
      this.tail.next = newNode;
    }

    if (!this.head) {
      this.head = newNode
    }
    
    this.tail = newNode;
  }

  // Метод удаления данных из начала очереди
  dequeue() {
    const deletedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    return deletedNode;
  }

  // Метод проверки на пустую очередь
  isEmpty() {
    if (this.head) return false
    else return true;
  }

 // Метод вывода первого значения очереди
 peek() {
    return this.head.data;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3); 
queue.enqueue(4);

console.log("QUEUE", queue.peek());
console.log(queue.dequeue());
console.log("QUEUE", queue.peek());
